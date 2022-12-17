import { Link } from "react-router-dom";
import React from 'react';


function Header()
{


    return (
        <div className="header"> 
            <img className="logoreacflix" src="./assets/reacflixlogo.svg"/>
            
            <Link to="" className="links" style={ {color: 'inherit', textDecoration: 'inherit'}}>Peliculas</Link>
            <Link to="" className="links" style={ {color: 'inherit', textDecoration: 'inherit'}}>Contacto</Link>
  
            <Link to="login" className="links" style={ { color: 'inherit', textDecoration: 'inherit'}}>Login</Link>
            <Link to="login" className="links" style={ { color: 'inherit', textDecoration: 'inherit'}}>Log-out</Link>
            
        </div>
    )

}


export default Header