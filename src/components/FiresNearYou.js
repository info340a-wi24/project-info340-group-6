import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map.tsx";

export default function FiresNearYou(props) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA1qqFGjxJdRSmLqFzhByHSZawBmh9bD5Y",
        libraries: ["places"],
    });
    
    if (!isLoaded) return <div>Loading...</div>
    return (
        <div>
            <Map />
        </div>
    )
    
}

