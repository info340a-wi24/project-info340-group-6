import React, { useState } from "react";

export default function FiresNearYou(props) {

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
    function displayMap() {
        const mapOptions = {
          center: { lat: -33.860664, lng: 151.208138 },
          zoom: 14
        };
      }
    return (
        <div id="map">
        <h1>Look For Fires Near You</h1>
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

        <iframe 
            title="google map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1A2FKVydykFR-oDNgLIaaDCKtO_SOuFY&ehbc=2E312F" 
            width="640" 
            height="480"
            style={{ border:0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

