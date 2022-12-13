import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import requests from "../requests";
import "../css/Banner.css";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOrginals);

			setMovie(
				request.data.results[
					Math.floor(Math.random() * (request.data.results.length - 1))
				]
			);
			return request;
		}
		fetchData();
	}, []);

	return (
        
		<header
			className="banner"
			style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}
		>
            			
			{/* <div className="banner__fadeBottom" /> */}
            <div className="color-overlay d-flex justify-content-center align-items-center"></div>
            <div className="banner__contents">
				<h1 className="banner__title">
					{/* Encadenamiento opcional porque a veces no tiene el mismo nombre */}
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
		  			<Link to='/poster' className="banner__button">WallPaper</Link>
				</div>
				<h1 className="banner__description">{movie?.overview}</h1>
               
			</div>
		</header>
	);
};

export default Banner;
