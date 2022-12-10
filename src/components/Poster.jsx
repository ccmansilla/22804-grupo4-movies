import React from "react";
import { useState, useEffect } from "react";
import html2canvas from 'html2canvas';
import './Poster.css';

function Poster() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    let api_key = "65ac98c7e8553bc17656ed4fe49ec9d3";
    const fetchPeliculas = async () => {
      try {
        const respuesta = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-MX&page=1`
        );

        switch (respuesta.status) {
          case 200:
            const datos = await respuesta.json();
            console.log(datos.results);
            setPeliculas(datos.results);
            break;
          case 401:
            console.log("Key incorrecta");
            break;
          case 404:
            console.log("No disponible");
            break;
          default:
            console.log(`Error ${respuesta.status}`);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPeliculas();
  }, []);

  const Descargar = (e) => {
    const poster = document.querySelector("#poster");
    html2canvas(poster,{ allowTaint: true, useCORS: true}).then(function (canvas) {
      let img = canvas.toDataURL("poster/jpg");
      let link = document.createElement("a");
      link.download = "poster.jpg";
      link.href = img;
      link.click();
    });

  }

  return (
    <div className="container">
      <div className="poster bg-dark row" id='poster'>
          {peliculas.map((pelicula) => (
            <div className="card bg-transparent border-0 col-2">
              <img
                className="border m-2"
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                title={pelicula.overview}
                alt={pelicula.title}
              />
            </div>
          ))}
          <div className="card bg-transparent border-0 col-2">
          </div>
          <div className="card bg-transparent border-0 col-4">
            <div class="card-body mt-5 pt-5">
              <h1 class="card-title">REACTFLIX</h1>
              <h2 class="card-subtitle mb-2 text-muted">POPULAR MOVIES</h2>
            </div>
          </div>
          <div className="card bg-transparent border-0 col-2">
          </div>
      </div>
      <div className="">
        <button onClick={Descargar} type="button" className='btn btn-primary mt-4 mb-4'>Descargar</button>
      </div>
    </div>
  );
}

export default Poster;
