import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import requests from "../requests";
import "../css/Banner.css";

const Banner = () => {
	const [movie, setMovie] = useState([]);
	const [movieId, setMovieId] = useState();

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOrginals);

			setMovieId(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				].id
			);
			return request;
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			if (movieId) {
				const request = await axios.get(
					`/tv/${movieId}?api_key=a32b11f48864be1ba2603a1f30797443&language=es-MX&append_to_response=videos,images&include_image_language=null,en`
				);
				setMovie(request.data);
				return request;
			}
		}
		fetchData();
	}, [movieId]);

	console.log(movie);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}
		>
			{/* <div className="banner__fadeBottom" /> */}
			<div className="color-overlay d-flex justify-content-center align-items-center"></div>
			<div className="col-1">
				<div className="banner__contents position-absolute bottom-0 start-0 w-xs-100 w-md-25">
					<h1 className="banner__title w-xs-50 w-md-25">
						{/* Encadenamiento opcional porque a veces no tiene el mismo nombre */}
						{/* {movie?.title || movie?.name || movie?.original_name} */}
						{movie.length === 0 ? (
							""
						) : movie?.images.logos.length === 0 ? (
							movie?.title || movie?.name || movie?.original_name
						) : (
							<img
								key={movie.id}
								className="banner_logo img-fluid"
								src={`https://image.tmdb.org/t/p/original/${movie.images.logos["0"].file_path}`}
								alt="Banner Logo"
							/>
						)}
					</h1>

					<div className="banner__buttons">
						<button className="banner__button">
							<i className="fa-solid fa-play"></i>Ver Trailer
						</button>
						<button className="banner__button">
							<i className="fa-solid fa-film"></i>Mi Lista
						</button>{" "}
						<Link to="/poster" className="banner__button">
							WallPaper
						</Link>
					</div>
					<h3 className="banner__description">
						{" "}
						{truncate(movie?.overview, 200)}
					</h3>
				</div>
			</div>
		</header>
	);
};

export default Banner;
