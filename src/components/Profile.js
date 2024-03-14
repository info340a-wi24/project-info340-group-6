import React, { useState } from "react";
import {DisplayForm} from './createPost.js'
import { getDatabase, ref, onValue, push, get, orderByChild, equalTo, query, update } from 'firebase/database';

export default function Profile(props) {

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

        const [loginData, setLoginData] = useState({
            username: '',
            password: '',
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

        async function setStorage(){
            console.log(formData.fname);
            const db = getDatabase();
            const userRef = ref(db, `UserInfo/${localStorage.getItem("userId")}`);

            try {
                await update(userRef, {
                    fname: formData.fname,
                    mname: formData.mname,
                    lname: formData.lname,
                    address: formData.address,
                    state: formData.state,
                    phone: formData.phone,
                    email: formData.email,
                    address: formData.address,
                    state: formData.state,
                    postal: formData.postal
                });

                console.log('Username and password updated successfully.');
            } catch (error) {
                console.error('Error updating username and password:', error);
            }
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



        const onLoginChange = (e) => {
            setLoginData((prev) => ({
                ...prev,
                [e.target.id]: e.target.value
            })
        )}

    async function loginAttempt() {
        console.log('triggered');
        const db = getDatabase();
        const loginRef = ref(db, "UserLogin");

        const loginQuery = query(loginRef, orderByChild('username'), equalTo(loginData.username));

        try {
            const snapshot = await get(loginQuery);
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    const user = childSnapshot.val();
                    if (user.password === loginData.password) {
                        localStorage.setItem('loggedIn', true);
                        localStorage.setItem('userId', childSnapshot.key);
                        window.location.reload();
                        return true;
                    }
                  });

            } else {
                return false;
            }
        } catch (error) {
            console.error('Error during login attempt:', error);
            return false;
        }
    }

        if (!localStorage.getItem('loggedIn')){
            return (
                <div id = "loginForm">
                    <h1>Enter Login Information</h1>
                    <label htmlFor="username">Username:</label>
                    <input onChange={onLoginChange}
                        type = {"text"}
                        id='username'
                        placeholder="username"
                    />
                    <label htmlFor="password">Password:</label>
                    <input onChange={onLoginChange}
                        type = {"text"}
                        id='password'
                        placeholder="password"
                    />
                    <button type="submit" onClick={loginAttempt}>Submit</button>
                </div>
            );
        }

    return (
        <div id = "profile">
            <div id="personal-info">
            <h1 className="text-center">Profile</h1>
                <div className="row">
                <div className="col">
                <input onChange={onChange}
                value = {formData.fname}
                type ={"text"}
                id='fname'
                placeholder="First"
                />
                <p>First Name</p>
                </div>
                <div className="col">
                <input onChange={onChange}
                value = {formData.mname}
                type ={"text"}
                id='mname'
                placeholder="M"
                />
                <p>Middle Initial</p>
                </div>
                <div className="col">
                <input onChange={onChange}
                value = {formData.lname}
                type ={"text"}
                id='lname'
                placeholder="Last"
                />
                <p>Last Name</p>
                </div>
                </div>
                <div className="row">
                <div className="col">
                <input onChange={onChange}
                value = {formData.phone}
                type ={"text"}
                id='phone'
                placeholder="XXX-XXX-XXXX"
                />
                <p>Phone Number</p>
                </div>
                <div className="col">
                <input onChange={onChange}
                value = {formData.email}
                type ={"text"}
                id='email'
                placeholder="JohnDoe@me.com"
                />
                <p>E-Mail</p>
                </div>
                <div className="col">
                <input onChange={onChange}
                value = {formData.address}
                type ={"text"}
                id='address'
                placeholder="Address"
                />
                <p>Address</p>
                </div>
                </div>
                <div className="row align-items-center">
                <div className="col offset-1">
                <input onChange={onChange}
                value = {formData.state}
                type ={"text"}
                id='state'
                placeholder="WA"
                />
                <p>State</p>
                </div>
                <div className="col">
                <input onChange={onChange}
                value = {formData.postal}
                type ={"text"}
                id='postal'
                placeholder="XXXXX"
                />
                <p>Postal Code</p>
                </div>
                </div>
                <button type="submit" onClick={setStorage}>Submit</button>
                </div>
                <DisplayForm />
        </div>
    )
}

