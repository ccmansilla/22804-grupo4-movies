import React, { useEffect, useState } from 'react';
import { app } from "../fb";
import Peliculas from './Peliculas';
import Logueo from './Logueo';

function Login() {

  const [usuario, setUsuario] = useState(null);
  useEffect(()=> {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
    setUsuario(usuarioFirebase);
  })
  } ,[])

  return (
    <div>
      {usuario ? <Peliculas usuario={usuario.email}/> : <Logueo setUsuario={setUsuario} />}
    </div>
  )
  
}

export default Login