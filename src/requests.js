const API_KEY = "65ac98c7e8553bc17656ed4fe49ec9d3";

const requests = {
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-MX`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-MX`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&language=es-MX&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=99`,
};

export default requests;