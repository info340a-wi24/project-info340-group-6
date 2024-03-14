import { useState, useMemo, useCallback, useRef } from "react";
import {GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer} from "@react-google-maps/api";
import Places from "./Places.tsx";
import Distance from "./Distance.tsx";
import { Buffer } from "buffer";
import { response } from "express";

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
                    console.log(data);
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
                        console.log(data);
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
                {ping && <Marker position={ping} />}
            </GoogleMap>
        </div>
    </div>
    )
}