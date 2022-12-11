import React from "react";
import Comentarios from "./Comentarios";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";

const Peliculas = () => {
	return (
		<div className="App">
		  <Banner/>
		  <Row
			title="NETFLIX ORIGINALS"
			fetchURL={requests.fetchNetflixOrginals}
			// isLargeRow={true}
		  />
		  <Row title="Trending NOW" fetchURL={requests.fetchTrending} />
		  <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
		  <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
		  <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
		  <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
		  <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
		  <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
		  <Comentarios />
		</div>
	  );
}

export default Peliculas;
