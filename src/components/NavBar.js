import React from "react";
import {NavLink} from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <a href="#" className="navbar-brand mb-0 h1 text-white">Sparkspotter</a>
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
                        <NavLink to="/Home" className="nav-link text-white">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/Profile" className="nav-link text-white">
                            Profile
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
                        <NavLink to="/Evacuations" className="nav-link text-white">
                            Evacuations
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}