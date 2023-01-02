import React from "react";
import { Link } from "react-router-dom";
import { app } from "../fb";

const Logout = () => {

    const cerrarSesion = () => {
        app.auth().signOut();
    };

    return (
        <Link to='/' className="links" onClick={cerrarSesion}><i className="fa-solid fa-power-off"></i>Salir</Link>
    )
};


export default Logout;