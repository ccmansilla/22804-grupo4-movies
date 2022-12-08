import React from 'react';
//import { app } from "../fb";
import Peliculas from './Peliculas';
import Logueo from './Logueo';

function Login() {

  const [usuario, setUsuario] = React.useState(null)
  return (
    <div>
      {usuario ? <Peliculas /> : <Logueo />}
    </div>
  )
}

export default Login