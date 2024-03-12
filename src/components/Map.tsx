import { useState, useMemo, useCallback, useRef } from "react";
import {GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer} from "@react-google-maps/api";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map() {
    const mapRef = useRef<GoogleMap>()
    const center = useMemo<LatLngLiteral>(() => ({lat: 43, lng: -80}), []);
    const options = useMemo<MapOptions>(
        () =>({
        disableDefaultUi: true,
        clickableIccons: false,
    }), 
    []
    );

    return (
    <div className="container"> 
        <div className="controls">
            <h1>Look Up Fires</h1>
        </div>
        <div className="map">
            <GoogleMap
                zoom={10}
                center={{center}}
                mapContainerClassName="map-container"
                options={options}
            >
            </GoogleMap>
        </div>
    </div>
    )
}