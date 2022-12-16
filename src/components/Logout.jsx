import React from "react";
import { app } from "../fb";

const Logout = () => {

    const cerrarSesion = () => {
        app.auth().signOut();
    };

    return (
        <button className="banner__button" onClick={cerrarSesion}>Cerrar sesión</button>
    )
};


export default Logout;