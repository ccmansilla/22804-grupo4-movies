import React from "react";
import { app } from "../fb";

const Logout = () => {

    const cerrarSesion = () => {
        app.auth().signOut();
    };

    return (
        <button className="banner__button" onClick={cerrarSesion}><i className="fa-solid fa-power-off"></i>Salir</button>
    )
};


export default Logout;