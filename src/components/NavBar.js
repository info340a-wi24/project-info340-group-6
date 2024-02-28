import React from "react";
import {NavLink} from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a href="#" className="navbar-brand mb-0 h1">Sparkspotter</a>
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
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link">
                            Profile
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link">
                            Fires Near You
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}