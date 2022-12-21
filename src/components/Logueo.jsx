import React from 'react';
import { useState } from "react";
import { app } from "../fb";
import "../css/Logueo.css";
import Swal from 'sweetalert2';

function Logueo(props) {

    const [isRegistrando, setIsRegistrando] = useState(false);  

    function crearUsuario(correo, password) {
        app.auth().createUserWithEmailAndPassword(correo, password)
            .then((usuarioFirebase) => {
                console.log("usuario creado:", usuarioFirebase);
                props.setUsuario(usuarioFirebase);
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    Swal.fire({title:"Este correo ya se encuentra registrado.", color: '#fff',
            background: 'rgba(51, 51, 51)', confirmButtonColor: '#3085d6',});
                }
            }
            );
            
    }

    function iniciarSesion(correo, password) {
        app.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
            console.log("sesión iniciada con:", usuarioFirebase.user);
            props.setUsuario(usuarioFirebase.user);
        })
            .catch((error) => {
                if (error.code === "auth/wrong-password") {
                    Swal.fire({title:"La contraseña ingresada es incorrecta.", color: '#fff',
            background: 'rgba(51, 51, 51)', confirmButtonColor: '#3085d6',});
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
                Swal.fire({title:"Debes ingresar un correo y una contraseña.", color: '#fff',
            background: 'rgba(51, 51, 51)', confirmButtonColor: '#3085d6',});
            }
            if (correo && ((password.length > 1) && (password.length < 6))) {
                Swal.fire({title:"La contraseña debe poseer al menos 6 caracteres.", color: '#fff',
            background: 'rgba(51, 51, 51)', confirmButtonColor: '#3085d6',});
            }
        }

        if (!isRegistrando) {
            iniciarSesion(correo, password);

        if (correo === "" || password==="") {
            Swal.fire({title:"Debes ingresar un correo y contraseña.", color: '#fff',
            background: 'rgba(51, 51, 51)', confirmButtonColor: '#3085d6',});
        } }
    
    };

    return (
        <div className="logueo">
            <div className='tarjeta'>
            <img className="logo" src="./assets/reacflixlogo.svg" />
            <h2>{isRegistrando ? "Registrate" : "Inicia sesión"}</h2>
            <form onSubmit={sumbmitHandler}>
                <div>
                    <label htmlFor='emailField'><i className="fa-solid fa-envelope"></i>Correo:</label>
                    <input type="email" id="emailField" />
                </div>
                <div>
                    <label htmlFor='passwordField'><i className="fa-solid fa-lock"></i>Contraseña:</label>
                    <input type="password" id="passwordField" />
                </div>
                <button className="btn btn-info" type="submit">
                    {""}
                    {isRegistrando ? "Registrate e ingresa" : "Inicia sesión"} {""}
                </button>
            </form>

            <button class="btn btn-link" onClick={() => setIsRegistrando(!isRegistrando)}>

                {isRegistrando
                    ? "Si ya tenés cuenta, iniciá sesión."
                    : "¿No tenés cuenta? Registrate."}

            </button>
            </div>
        </div>
    );
}

export default Logueo;