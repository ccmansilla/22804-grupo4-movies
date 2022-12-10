import React from 'react';
//import { useState } from "react";
import { app } from "../fb";
import "../Logueo.css";
import Swal from 'sweetalert2';


function Logueo(props) {

    const [isRegistrando, setIsRegistrando] = React.useState(false);
    


    function crearUsuario(correo, password) {
        app.auth().createUserWithEmailAndPassword(correo, password)
            .then((usuarioFirebase) => {
                console.log("usuario creado:", usuarioFirebase);
                props.setUsuario(usuarioFirebase);
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    Swal.fire("Este correo ya está en uso.");
                }
            }
            );
            
    }

    function iniciarSesion(correo, password) {
        app.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
            console.log("sesión iniciada con:", usuarioFirebase.user);
            props.setUsuario(usuarioFirebase);
        })
            .catch((error) => {
                if (error.code === "auth/wrong-password") {
                    Swal.fire("La contraseña ingresada es incorrecta.");
                }
            }
            );

    }

    const sumbmitHandler = (e) => {
        e.preventDefault();
        const correo = e.target.emailField.value;
        const password = e.target.passwordField.value;

      
        if (isRegistrando) {
            crearUsuario(correo, password);
            if (correo === "" || password==="") {
                Swal.fire("Debes ingresar un correo y una contraseña.");
            }
            if (correo && ((password.length > 1) && (password.length < 6))) {
                Swal.fire("La contraseña debe poseer al menos 6 caracteres.");
            }
        }

        if (!isRegistrando) {
            iniciarSesion(correo, password);

        if (correo === "" || password==="") {
            Swal.fire("Debes ingresar un correo y contraseña.");
        } }
    
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
                <button className="btn btn-info" type="submit">
                    {""}
                    {isRegistrando ? "Registrate" : "Inicia sesión"} {""}
                </button>
            </form>

            <button class="btn btn-link" onClick={() => setIsRegistrando(!isRegistrando)}>

                {isRegistrando
                    ? "Si ya tenés cuenta, iniciá sesión."
                    : "¿No tenés cuenta? Registrate."}

            </button>
        </div>
    );
}

export default Logueo;