import { Link, NavLink } from "react-router-dom";
import React from 'react';
import Logout from "./Logout";


function Header() {

  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary header"  >
        <div class="container-fluid" >
          <img className="logoreacflix" src="./assets/reacflixlogo.svg" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse hamburgernav" id="navbarNavAltMarkup">
            <div class="navbar-nav headertitulos">
              <NavLink to="/" className="links">Peliculas</NavLink>
              <NavLink to="/form" className="links">Contacto</NavLink>
              <NavLink to="/poster" className="links">Wallpaper</NavLink>
              <Logout />
            </div>
          </div>
        </div>
      </nav>
    </div>

  )

}


export default Header