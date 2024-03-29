import React from "react";
import {NavLink} from 'react-router-dom';

export default function NavBar(props) {
    let inOrOut = "Log In";
    if (localStorage.getItem('loggedIn')){
        inOrOut = 'Log Out';
    }
    function logOut() {
        localStorage.removeItem('loggedIn');
        window.location.reload();
    }

    const isLoggedIn = localStorage.getItem('loggedIn');
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <NavLink to="/" className="navbar-brand mb-0 h1 text-white">
                <img src="/favicon.ico" alt="SparkSpotter" style={{ height: '30px' }} />
                Sparkspotter
            </NavLink>
            <button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                className="navbar-toggler"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link text-white">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/About" className="nav-link text-white">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/FiresNearYou" className="nav-link text-white">
                            Fires Near You
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/Resources" className="nav-link text-white">
                            Resources
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                        <NavLink to="/Profile" className="nav-link text-white dropdown-toggle" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </NavLink>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                            <li><NavLink className="dropdown-item" to="/Profile">Settings</NavLink></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><NavLink className="dropdown-item" to="/Profile" onClick={isLoggedIn ? logOut : undefined}>{inOrOut}</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
