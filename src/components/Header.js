import { Link } from "react-router-dom";
import React from 'react';


function Header()
{


    return (
       
        
<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary header"  >
<div class="container-fluid" >
<img className="logoreacflix" src="./assets/reacflixlogo.svg"/>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse hamburgernav" id="navbarNavAltMarkup">
    <div class="navbar-nav headertitulos">
      <Link to="" className="links" class="nav-link" style={ {color: 'inherit', textDecoration: 'inherit'}}>Peliculas</Link>
      <Link to="" className="links" class="nav-link" style={ {color: 'inherit', textDecoration: 'inherit'}}>Contacto</Link>
  
  <Link to="login" className="links" class="nav-link" style={ { color: 'inherit', textDecoration: 'inherit'}}>Login</Link>
  <Link to="login" className="links" class="nav-link" style={ { color: 'inherit', textDecoration: 'inherit'}}>Log-out</Link>
    </div>
  </div>
</div>
</nav>
</div>

    )

}


export default Header