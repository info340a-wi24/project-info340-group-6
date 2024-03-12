import { useState, useMemo, useCallback, useRef } from "react";
import {GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer} from "@react-google-maps/api";


export default function Map() {
    const center = useMemo(() => ({lat: 40, lng: -80}), []);
    
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
            >
            </GoogleMap>
        </div>
    </div>
    )
}