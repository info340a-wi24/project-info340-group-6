import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map";

export default function FiresNearYou(props) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA1qqFGjxJdRSmLqFzhByHSZawBmh9bD5Y",
        libraries: ["places"],
    });

   const [formData, setFormData] = useState({
        address: "",
        city: ""
    });
    const onChange = (e) => {
        setFormData((prev) => {
            let helper = { prev };

            helper[`${e.target.id}`] = e.target.value;

            return helper;
        })
    }
    if (!isLoaded) return <div>Loading...</div>
    return (
        <div id="map" className="row d-flex justify-content-center">
            <h1 className="text-center">Look For Fires Near You</h1>
                <input onChange={onChange} 
                    value = {formData.address}
                    type ={"text"}
                    id='address'
                    placeholder="Address"
                />
            <p>Address</p>
                <input onChange={onChange} 
                    value = {formData.city}
                    type ={"text"}
                    id='city'
                    placeholder="City"
                />
            <p>City</p>
            <Map />
        </div>
    )
    
}

