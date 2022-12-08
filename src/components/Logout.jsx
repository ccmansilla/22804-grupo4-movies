import React from "react";
import { app } from "../fb";

const Logout = () => {

    const cerrarSesion = () => {
        app.auth().signOut();
    };

    return (
        <div>
            <button onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
    )
};


export default Logout;