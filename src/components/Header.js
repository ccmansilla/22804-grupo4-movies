import { Link } from "react-router-dom";



function Header()
{


    return (
        <div className="header"> 
            <img className="logoreacflix" src="./assets/reacflixlogoheader.png"/>
            
            <Link to="" className="links" style={ {color: 'inherit', textDecoration: 'inherit'}}>Peliculas</Link>
            <Link to="" className="links" style={ {color: 'inherit', textDecoration: 'inherit'}}>Contacto</Link>
  
            <Link to="login" className="links" style={ { color: 'inherit', textDecoration: 'inherit'}}>Login</Link>

            
        </div>
    )

}


export default Header