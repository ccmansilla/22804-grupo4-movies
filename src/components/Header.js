import { Link, NavLink } from "react-router-dom";
import React from 'react';
import Logout from "./Logout";


function Header() {

    return (
        <div className="header">
            <img className="logoreacflix" src="./assets/reacflixlogo.svg" />
            <Link to="/" className="links" style={{ color: 'inherit', textDecoration: 'inherit' }}>Peliculas</Link>
            <Link to="/form" className="links" style={{ color: 'inherit', textDecoration: 'inherit' }}>Contacto</Link>
            <NavLink to="/poster" className="links">
                <i className="fa-regular fa-image"></i> Wallpaper
            </NavLink>
            <Logout />
        </div>
    )

}


export default Header