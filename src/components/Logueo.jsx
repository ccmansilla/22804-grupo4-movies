import React, { useState } from 'react';

const Logueo = () => {

const [isRegistrando, setIsRegistrando] = React.useState(false);
    return(
        <div>
            <h1>{ isRegistrando ? "Registrate" : "Inicia sesión"}</h1>
            <form>
                <label htmlFor='emailField'>Correo:</label>
                <input type="email" id="emailField" />
                <label htmlFor='passwordField'>Contraseña:</label>
                <input type="password" id="passwordField" />
                <button type="submit">
                {""}
                { isRegistrando ? "Registrate" : "Inicia sesión"} {""}
                </button>
            </form>

            <button onClick={() => setIsRegistrando(!isRegistrando)}>

            {isRegistrando
            ?"si tienes cuenta inicia sesión"
            :"No tienes cuenta? Registrate"}
            
            </button>
        </div>
    )
}

export default Logueo;