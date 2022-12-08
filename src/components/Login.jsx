import React, { useEffect } from 'react';
import { app } from "../fb";
import Peliculas from './Peliculas';
import Logueo from './Logueo';

function Login() {

  const [usuario, setUsuario] = React.useState(null);
  useEffect(()=> {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
    setUsuario(usuarioFirebase);
  })
  } ,[])

  return (
    <div>
      {usuario ? <Peliculas /> : <Logueo setUsuario={setUsuario} />}
    </div>
  )
}

export default Login