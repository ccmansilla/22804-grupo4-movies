import React from 'react';

import { Link } from "react-router-dom";

function Footer(){
  


return (
<div className="footer">
    
<Link to="wallpaper" className="links" style={ { color: 'inherit', textDecoration: 'inherit'}}>Wallpaper</Link>


<div className='contacto'> Contacto

<a href="https://github.com/ccmansilla/22804-grupo4-movies" target="_blank" className="links" style={ { color: 'inherit', textDecoration: 'inherit'}}>
<div>
<i className="fa-brands fa-github fonticon " ></i> <p>Github</p> 
</div>
</a>


</div>

   



<div class="btn-group">
  <button className="btn btn-secondary btn-lg dropdown-toggle nuestroequipo" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <p>Nuestro equipo</p>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="https://www.linkedin.com/in/carloscmansilla/"><i className="fa-brands fa-linkedin fonticon " ></i>Carlos Mansilla</a></li>
    <li><a class="dropdown-item" href="http://www.linkedin.com/in/ferffloress"><i className="fa-brands fa-linkedin fonticon " ></i> Fernanda Flores</a></li>
    <li><a class="dropdown-item" href="https://www.linkedin.com/in/francoyunes/"><i className="fa-brands fa-linkedin fonticon " ></i> Franco Yunes</a></li>
    <li><a class="dropdown-item" href="https://www.linkedin.com/in/gianninaminano/"><i className="fa-brands fa-linkedin fonticon " ></i> Gianina Miñano</a></li>
    <li><a class="dropdown-item" href="https://www.linkedin.com/in/maribel-demarco/"><i className="fa-brands fa-linkedin fonticon " ></i> Maribel De Marco</a></li>

  </ul>
</div>



</div>




)


}



export default Footer