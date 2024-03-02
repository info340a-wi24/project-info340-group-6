import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD9ogV79K-SEUfNTvy1DXusMyjIDb1i2gw",

  authDomain: "sparkspotter-f5b95.firebaseapp.com",

  projectId: "sparkspotter-f5b95",

  storageBucket: "sparkspotter-f5b95.appspot.com",

  messagingSenderId: "610039295792",

  appId: "1:610039295792:web:54cf568ba4126225a8e2f5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
