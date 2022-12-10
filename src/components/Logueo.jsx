import React from 'react';
//import { useState } from "react";
import { app } from "../fb";
import "../Logueo.css";

function Logueo(props) {

    const [isRegistrando, setIsRegistrando] = React.useState(false);

    const crearUsuario = (correo, password) => {
        app.auth().createUserWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
            console.log("usuario creado:", usuarioFirebase);
            props.setUsuario(usuarioFirebase);
        });
    };

    const iniciarSesion = (correo, password) => {
        app.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
            console.log("sesión iniciada con:", usuarioFirebase.user);
            props.setUsuario(usuarioFirebase);
        });
    };

    const sumbmitHandler = (e) => {
        e.preventDefault();
        const correo = e.target.emailField.value;
        const password = e.target.passwordField.value;

        if (isRegistrando) {
            crearUsuario(correo, password);
        }

        if (!isRegistrando) {
            iniciarSesion(correo, password);
        }
    };

    return (
        <div className="logueo">
            <h2>{isRegistrando ? "Registrate" : "Inicia sesión"}</h2>
            <form onSubmit={sumbmitHandler}>
                <div>
                    <label htmlFor='emailField'>Correo:</label>
                    <input type="email" id="emailField" />
                </div>
                <div>
                    <label htmlFor='passwordField'>Contraseña:</label>
                    <input type="password" id="passwordField" />
                </div>
                <button type="submit">
                    {""}
                    {isRegistrando ? "Registrate" : "Inicia sesión"} {""}
                </button>
            </form>

            <button onClick={() => setIsRegistrando(!isRegistrando)}>

                {isRegistrando
                    ? "Si ya tenés cuenta, iniciá sesión"
                    : "No tenés cuenta? Registrate"}

            </button>
        </div>
    );
}

export default Logueo;