import { useState, useEffect } from 'react';
import movieData from '../sampleData';
import Header from '../Header/Header'
import Movies from '../Movies/Movies';
import MovieDetail from '../MovieDetail/MovieDetail'
import './App.css';

function App() {
  const [ movies, setMovies ] = useState([])
  // const movies = movieData.movies
  // const [ videos, setVideos ] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError ] = useState('')

  useEffect(() => {
    getMovies()
  },[])

  const getMovies = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        console.log("error in response",error)
        throw new Error (`${error}: Failed to fetch data`);
    }
      return response.json()
    })
    .then(moviesData => {
      // console.log("movieData",moviesData)
      setMovies(moviesData.movies)
    })
    .catch(error => {
      console.log('error in catch', error)
      setError(error.message)
    })
  }
  
  function displayMovie(id) {
    const findMovie = movies.find(selected => {
      // console.log(selected, 'each individual movie')
      return selected.id === id;
    })

  // function displayVideo(id) {
  //   const findVideo = 
  // }

    // Define array of API endpoints
    const apiEndpoints = [
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${findMovie.id}`,
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${findMovie.id}/videos`,
    ];

    // setSelectedMovie(findMovie)
    // console.log("selectedMovie before fetch",selectedMovie)
    // setSelectedVideo(findMovie)
    // console.log("selectedVideo before fetch",selectedVideo)

    Promise.all(apiEndpoints.map(endpoint => fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        console.log("error in response",error)
        throw new Error (`${error}: Failed to fetch data`);
    }
      return response.json()
    })
  ))
  .then(movieDetails => {
    console.log("movieDetails array:", movieDetails);
  
    // Ensure that the array has two elements
    if (movieDetails.length === 2) {
      const [movieObject, videosObject] = movieDetails;
  
      // Check if 'movie' property is present before accessing it
      const movie = movieObject && movieObject.movie;
      // console.log("movie",movie)
      const combinedDetails = {
        movie: movie,
        videos: videosObject.videos || [],
      };
      
      setSelectedMovie(combinedDetails.movie);
      // console.log("selectedMovie after fetch",selectedMovie)
      const findVideo = combinedDetails.videos.find(selected => { return selected.movie_id === combinedDetails.movie.id})
      setSelectedVideo(findVideo)
      // console.log("selectedVideo after fetch",selectedMovie)
    } else {
      console.error("Unexpected structure in movieDetails array");
    }
    
    })
  }
  function displayHomePage() {
    setSelectedMovie(null)
  }

  return (
    <div className="App">
      <Header />
      {selectedMovie ? 
        <MovieDetail selectedMovie={selectedMovie} selectedVideo={selectedVideo} displayHomePage={displayHomePage}/>
        : <Movies movies={movies} displayMovie={displayMovie}/>}
    </div>
  )
}

export default App;


//QUESTION:
//1. What's the purpose of getting sample data... rather than a GET request