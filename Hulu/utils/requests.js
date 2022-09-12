const API_KEY = process.env.API_KEY;

export default {
    // This gets all the Trending movies
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    // This gets all the Top Rated Movies
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    // This gets all the Action Movies movies
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    // This gets all the Comedy movies
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    // This gets all the Horror movies
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    // This gets all the Romantic movies
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    // This gets all the Mystery movies
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    // This gets all the Sci-Fi movies
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    // This gets all the Western movies
    fetchWestern: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    // This gets all the Animation movies
    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    // This gets all the TV shows
    fetchTV: {
        title: 'TV Movies',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
};