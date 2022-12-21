import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";
import Comentarios from "./Comentarios";
import Header from './Header';
import Footer from './Footer';

const Peliculas = ({usuario}) => {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Row
				title="Series Originales de NETFLIX"
				fetchURL={requests.fetchNetflixOrginals}
			/>
			<Row title="Populares" fetchURL={requests.fetchTrending} />
			<Row
				title="Películas Mejor Puntuadas"
				fetchURL={requests.fetchTopRated}
			/>
			<Row
				title="Películas: Acción"
				fetchURL={requests.fetchActionMovies}
			/>
			<Row
				title="Películas: Comedia"
				fetchURL={requests.fetchComedyMovies}
			/>
			<Row
				title="Películas: Terror"
				fetchURL={requests.fetchHorrorMovies}
			/>
			<Row
				title="Películas: Románticas"
				fetchURL={requests.fetchRomanceMovies}
			/>
			<Row title="Documentales" fetchURL={requests.fetchDocumentaries} />
			<Comentarios usuario={usuario}/>
			<Footer />
		</div>
	);
}

export default Peliculas;
