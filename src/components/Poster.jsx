import React from "react";
import { useState, useEffect } from "react";
import axios from '../axios';
import requests from "../requests";
import html2canvas from 'html2canvas';
import '../css/Poster.css';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

function Poster() {
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
    <div className="contenedor">
      <Header />
      <div className="marco">
        <div className="tile row" id='poster'>
          {movies.map((movie) => (
            <img
              key={movie.poster_path}
              className="picture"
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
          <div className='texto p-5'>
            <h1 className="text-center"><i className="fa-sharp fa-solid fa-film"></i> ReactFliX</h1>
          </div>
        </div>
      </div>
      <div className="m-5">
        <button onClick={Descargar} type="button" className='poster__button ms-5'><i className="fa-sharp fa-solid fa-download"></i> Descargar</button>
      </div>
      <Footer />
    </div>
  );
}

export default Poster;
