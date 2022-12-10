import axios from "axios";

// url base para hacer las requests a TMDB

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;