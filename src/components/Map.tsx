import { useState, useMemo, useCallback, useRef } from "react";
import {GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer} from "@react-google-maps/api";
import Places from "./Places.tsx";
import { Buffer } from "buffer";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map() {
    const [ping, setPing] = useState<LatLngLiteral>();
    const mapRef = useRef<GoogleMap>();
    const center = useMemo<LatLngLiteral>(() => ({lat: 47.655, lng: -122.30}), []);
    const options = useMemo<MapOptions>(
        () => ({
            disableDefaultUi: true,
            clickableIccons: false,
        }), 
        []
    );
    const [fireData, setFireData] = useState({});

    const onLoad = useCallback((map)=>(mapRef.current = map), []);
    return (
    <div className="container"> 
        <div className="controls">
            <h1>Look Up Fires</h1>
            <Places setPing={(position) => {

                setPing(position);
                mapRef.current?.panTo(position);
                fetch("https://api.precisely.com/oauth/token", {
                    method: 'post',
                    body: 'grant_type=client_credentials',
                    headers : new Headers ({
                        'Authorization': 'Basic ' + Buffer.from('fo1ybRYY76gAkQliA0YxuhUxfbSOysuP:kWh4N18yA4t8WNYQ').toString("base64"),
                        'Content-Type': 'application/x-www-form-urlencoded/e2ZvMXliUllZNzZnQWtRbGlBMFl4dWhVeGZiU095c3VQfTp7a1doNE4xOHlBNHQ4V05ZUX0='
                    }) 
                })
                .then((response) => 
                    response.json()
                )
                .then((data) => {
                    return fetch(`https://api.precisely.com/risks/v2/fire/bylocation?latitude=${position.lat}&longitude=${position.lng}&includeGeometry=N`,{
                        method: 'GET',
                        headers : {
                            'Authorization': `Bearer ${data.access_token}`
                        } 
                    })
                    .then((response) =>
                        response.json()
                    )
                    .then((data) => {
                        setFireData(data);
                        return data;
                    })
                });
            }
            }/>
        </div>
        <div className="map">
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName="map-container"
                options={options}
                onLoad={onLoad}
            >
                {ping && (
                <>
                    <Marker position={ping} />
                    <Circle center={ping} radius={15000} options={getColor(fireData.risk50)}/>
                </>
                )}
            </GoogleMap>
        </div>
        <h2>Danger Level: {fireData.riskDesc}</h2>
    </div>
    )
}

function getColor(riskLevel) {
    if (riskLevel <= 10) {
        return {
            strokeColor: "#00FF00",
            fillColor: "#00FF00"
        };
    } else if (riskLevel <= 20) {
        return {
            strokeColor: "#FFFF00",
            fillColor: "#FFFF00"
        };
    } else if (riskLevel <= 30) {
        return {
            strokeColor: "#FFA500",
            fillColor: "#FFA500"
        };
    } else {
        return {
            strokeColor: "#FF0000",
            fillColor: "#FF0000"
        };
    }
}