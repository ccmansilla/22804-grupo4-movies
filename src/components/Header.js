import { Link } from "react-router-dom";
import React from 'react';
import Logout from "./Logout";


function Header() {


    return (
        <div className="header">
            <img className="logoreacflix" src="./assets/reacflixlogo.svg" />

            <Link to="" className="links" style={{ color: 'inherit', textDecoration: 'inherit' }}>Peliculas</Link>
            <Link to="" className="links" style={{ color: 'inherit', textDecoration: 'inherit' }}>Contacto</Link>
            <Link to="/poster" className="banner__button">
                <i class="fa-regular fa-image"></i> Wallpaper
            </Link>
            <Logout />

        </div>
    )

}


export default Header