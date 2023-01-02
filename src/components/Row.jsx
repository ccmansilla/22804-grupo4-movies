import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../css/Row.css";
import Swal from 'sweetalert2';

// url para imagenes
const base_url = "https://image.tmdb.org/t/p/w300/";

const Row = ({ title, fetchURL }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchURL]);

	const handleClick = (movie) => {

		const name = movie?.title || movie?.name || movie?.original_name;
		const year = (new Date(movie?.first_air_date || movie?.release_date)).getFullYear();
		const description = (movie.overview === '')? '' : 'Descripcion:';
		console.log(movie);

		Swal.fire({
			imageUrl: `${base_url}/${movie.poster_path}`,
			imageHeight: 300,
			imageAlt: 'Poster',
			title: `<h2 class='title__detail'>${name} (${year})</h2>`,			
			html: `<div>
					<h3 class='title__description'>${description}</h3>
					<p class='text__description'>${movie.overview}</p>
				   </div>`,
			confirmButtonText: 'Cerrar',			
			confirmButtonColor: '#FFAF19',
			color: '#FFF',
			background: '#212529',
			showClass: {
				popup: 'animate__animated animate__fadeInDown'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp'
			}
		});
	};

	return (
		<div className="row pt-4">
			<h2 className="title">{title}</h2>

			<div className="posters">
				{movies.map((movie) => (
					<div className="poster__container">
						<img
							key={movie.id}
							className="poster"
							src={`${base_url}${movie.poster_path}`}
							onClick={() => handleClick(movie)}
							alt={movie?.title || movie?.name || movie?.original_name}
							title={movie?.overview}
						/>
						<div className="poster__description">
							<i className="fa-solid fa-star"></i>{parseInt(movie.vote_average)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Row;
