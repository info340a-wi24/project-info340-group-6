import React, { useState } from "react";
import {DisplayForm} from './createPost.js'

export default function Profile(props) {
        let fname = ""
        let mname = ""
        let lname = ""
        let phone = ""
        let email = ""
        let address = ""
        let state = ""
        let postal = ""

        const [formData, setFormData] = useState({
            fname: "",
            mname: "",
            lname: "",
            phone: "",
            email: "",
            address: "",
            state: "",
            postal: ""
        });

        const onChange = (e) => {
            setFormData((prev) => ({
                //let helper = { prev };

                //helper[`${e.target.id}`] = e.target.value;

                //return helper;

                ...prev,  // Spread the previous state
                [e.target.id]: e.target.value
            })
        )}

        function setStorage(){
            console.log(formData.fname);
            localStorage.setItem('fname', formData.fname);
            localStorage.setItem('lname', formData.lname);
            localStorage.setItem('address', formData.address);
            setFormData({
                fname: "",
                mname: "",
                lname: "",
                phone: "",
                email: "",
                address: "",
                state: "",
                postal: ""
            });
        }
    return (
        <div id = "profile">
            <div id="personal-info">
            <h1>Profile</h1>
                <input onChange={onChange}
                value = {formData.fname}
                type ={"text"}
                id='fname'
                placeholder="First"
                />
                <p>First Name</p>
                <input onChange={onChange}
                value = {formData.mname}
                type ={"text"}
                id='mname'
                placeholder="M"
                />
                <p>Middle Initial</p>
                <input onChange={onChange}
                value = {formData.lname}
                type ={"text"}
                id='lname'
                placeholder="Last"
                />
                <p>Last Name</p>
                <input onChange={onChange}
                value = {formData.phone}
                type ={"text"}
                id='phone'
                placeholder="XXX-XXX-XXXX"
                />
                <p>Phone Number</p>
                <input onChange={onChange}
                value = {formData.email}
                type ={"text"}
                id='email'
                placeholder="JohnDoe@me.com"
                />
                <p>E-Mail</p>
                <input onChange={onChange}
                value = {formData.address}
                type ={"text"}
                id='address'
                placeholder="Address"
                />
                <p>Address</p>
                <input onChange={onChange}
                value = {formData.state}
                type ={"text"}
                id='state'
                placeholder="WA"
                />
                <p>State</p>
                <input onChange={onChange}
                value = {formData.postal}
                type ={"text"}
                id='postal'
                placeholder="XXXXX"
                />
                <p>Postal Code</p>
                <button type="submit" onClick={setStorage}>Submit</button>
                </div>
                <DisplayForm />
        </div>
    )
}

