import React from "react";
import { useState, useEffect } from "react";
import axios from '../axios';
import requests from "../requests";
import html2canvas from 'html2canvas';
import { Link } from "react-router-dom";
import '../css/Poster.css';

function Poster() {
  const API_KEY = "65ac98c7e8553bc17656ed4fe49ec9d3";
  const [movies, setMovies] = useState([]);
  const fetchURL = requests.fetchNetflixOrginals;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  //funcion que crea el wallpaper con html2canvas
  const Descargar = () => {
    const poster = document.querySelector("#poster");
    html2canvas(poster, { allowTaint: true, useCORS: true, imageTimeout: 30000 }).then((canvas) => {
      let img = canvas.toDataURL("poster/png");
      let link = document.createElement("a");
      link.download = "poster.png";
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="container-fluid">
      <div className="tile row" id='poster'>
        {movies.map((movie) => (
            <img
              key={movie.poster_path}
              className="picture" 
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}?api_key=${API_KEY}`}
              alt={movie.title}
            />
        ))}
        <div className='texto p-5'>
          <h1 className="text-center"><i class="fa-sharp fa-solid fa-film"></i> ReactFliX</h1>
        </div>
      </div>
      <div className="mb-5">
        <Link className='poster__button' to="/"><i class="fa-solid fa-house"></i> Volver</Link>
        <button onClick={Descargar} type="button" className='poster__button ms-1'><i class="fa-sharp fa-solid fa-download"></i> Descargar</button>
      </div>
    </div>
  );
}

export default Poster;
