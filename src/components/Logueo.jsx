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
                    Swal.fire({
                        title:"Este correo ya se encuentra registrado.", 
                        color: '#FFA500',
                        background: '#212529', 
                        confirmButtonColor: '#FFA500'
                    });
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
                    Swal.fire({
                        title:"La contraseña ingresada es incorrecta.", 
                        color: '#FFA500',
                        background: '#212529',
                        confirmButtonColor: '#FFA500'
                    });
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
                Swal.fire({
                    title:"Debes ingresar un correo y una contraseña.", 
                    color: '#FFA500',
                    background: '#212529', 
                    confirmButtonColor: '#FFA500',
                });
            }
            if (correo && ((password.length > 1) && (password.length < 6))) {
                Swal.fire({
                    title:"La contraseña debe poseer al menos 6 caracteres.", 
                    color: '#FFA500',
                    background: '#212529', 
                    confirmButtonColor: '#FFA500'
                });
            }
        }

        if (!isRegistrando) {
            iniciarSesion(correo, password);

        if (correo === "" || password==="") {
            Swal.fire({
                title:"Debes ingresar un correo y contraseña.", 
                color: '#FFA500',
                background: '#212529', 
                confirmButtonColor: '#FFA500'
            });
        } }
    
    };

    return (
        <div className="logueo">
            <div className='tarjeta'>
            <h1 className="title1"><i class="fa-solid fa-film"></i>ReactFliX</h1>
            <br />
            <h3 className='title'>{isRegistrando ? "Registrate" : "Inicia sesión"}</h3>
            <form onSubmit={sumbmitHandler}>
                <div>
                    <label htmlFor='emailField'><i className="fa-solid fa-envelope"></i>Correo:</label>
                    <input type="email" id="emailField" />
                </div>
                <div>
                    <label htmlFor='passwordField'><i className="fa-solid fa-lock"></i>Contraseña:</label>
                    <input type="password" id="passwordField" />
                </div>
                <button className="login__button" type="submit">
                    {""}
                    {isRegistrando ? "Registrate e ingresa" : "Inicia sesión"} {""}
                </button>
            </form>

            <button class="bg-transparent links border-0" onClick={() => setIsRegistrando(!isRegistrando)}>

                {isRegistrando
                    ? "Si ya tenés cuenta, iniciá sesión."
                    : "¿No tenés cuenta? Registrate."}

            </button>
            </div>
        </div>
    );
}

export default Logueo;