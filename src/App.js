import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";


// function App() {
// 	const api_key = "65ac98c7e8553bc17656ed4fe49ec9d3";
// 	const [peliculas, setPeliculas] = useState([]);
// 	const [pagina, setPagina] = useState(1);

// 	const anterior = () => {
// 		if (pagina > 1) {
// 			setPagina(pagina - 1);
// 		}
// 	};

// 	const siguiente = () => {
// 		if (pagina < 1000) {
// 			setPagina(pagina + 1);
// 		}
// 	};

// 	useEffect(() => {
// 		const fetchPeliculas = async () => {
// 			try {
// 				const respuesta = await fetch(
// 					`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-MX&page=${pagina}`
// 				);

// 				switch (respuesta.status) {
// 					case 200:
// 						const datos = await respuesta.json();
// 						console.log(datos.results);
// 						setPeliculas(datos.results);
// 						break;
// 					case 401:
// 						console.log("Key incorrecta");
// 						break;
// 					case 404:
// 						console.log("No disponible");
// 						break;
// 					default:
// 						console.log(`Error ${respuesta.status}`);
// 				}
// 			} catch (error) {
// 				console.log(error.message);
// 			}
// 		};
// 		fetchPeliculas();
// 	}, [api_key, pagina]);

// 	return (
// 		<div className="App">
// 			<div className="encabezado">
// 				<h1>
// 					{" "}
// 					<img src="tmdb.svg" width="80px" alt="TMDB" /> Peliculas
// 				</h1>
// 			</div>

// 			<div className="contenedor" id="contenedor">
// 				{peliculas.map((pelicula) => (
// 					<div className="pelicula">
// 						<img
// 							className="poster"
// 							key={pelicula.id}
// 							src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
// 							title={pelicula.title}
// 							alt={pelicula.original_title}
// 						/>
// 						<p className="titulo">{pelicula.title}</p>
// 						<p className="puntuacion">
// 							<i className="fa-solid fa-star"></i>{" "}
// 							{pelicula.vote_average}
// 						</p>
// 					</div>
// 				))}
// 			</div>

// 			<div className="paginacion">
// 				<button id="btnAnterior" onClick={anterior}>
// 					Anterior
// 				</button>
// 				<button id="btnSiguiente" onClick={siguiente}>
// 					Siguiente
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

const App = () => {
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
		</div>
	  );
}

export default App;
