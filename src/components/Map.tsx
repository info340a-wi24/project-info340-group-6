import { useState, useMemo, useCallback, useRef } from "react";
import {GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer} from "@react-google-maps/api";
import Places from "./Places.tsx";
import Distance from "./Distance.tsx";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map() {
    const [ping, setPing] = useState<LatLngLiteral>();
    const mapRef = useRef<GoogleMap>()
    const center = useMemo<LatLngLiteral>(() => ({lat: 43, lng: -80}), []);
    const options = useMemo<MapOptions>(
        () =>({
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
            </GoogleMap>
        </div>
    </div>
    )
}