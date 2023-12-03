import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Movies from '../Movies/Movies';
import MovieDetail from '../MovieDetail/MovieDetail'

import './App.css';

function App() {
  const [ movies, setMovies ] = useState([])
  const [ selectedMovie, setSelectedMovie ] = useState(null);
  const [ selectedVideo, setSelectedVideo ] = useState(null);
  const [ currentMovieIndex, setCurrentMovieIndex ] = useState(0);
  const [ error, setError ] = useState('')

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
      setMovies(moviesData.movies)
    })
    .catch(error => {
      console.log('error in catch', error)
      setError(error.message)
    })
  }
  
  function displayMovie(id) {
    const findMovie = movies.find(selected => {
      return selected.id === id;
    })

    // Define array of API endpoints
    const apiEndpoints = [
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${findMovie.id}`,
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${findMovie.id}/videos`,
    ];

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
      const findVideo = combinedDetails.videos.find(selected => { return selected.movie_id === combinedDetails.movie.id})
      setSelectedVideo(findVideo)
    } else {
      console.error("Unexpected structure in movieDetails array");
    }
    })
  }

  function displayHomePage() {
    setSelectedMovie(null)
  }

  function arrowLeft() {
    setCurrentMovieIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  }

  function arrowRight() {
    setCurrentMovieIndex(prevIndex => (prevIndex < movies.length - 1 ? prevIndex + 1 : prevIndex));
  }

  return (
    <div className="App">
      <Header />
      {selectedMovie ?  <MovieDetail selectedMovie={selectedMovie} selectedVideo={selectedVideo} displayHomePage={displayHomePage} />: 
      <>
      <button className="arrow left-arrow" onClick={arrowLeft}>&lt;</button>
      <button className="arrow right-arrow" onClick={arrowRight}>&gt;</button>
      <Movies movies={movies} displayMovie={displayMovie} currentMovieIndex={currentMovieIndex}
      />
      </>}
    </div>
  )
}

export default App;

App.propTypes = {
  selectedMovie: PropTypes.object,
  selectedVideo: PropTypes.object,
  displayHomePage: PropTypes.func,
  movies: PropTypes.array,
  displayMovie: PropTypes.func,
  currentMovieIndex: PropTypes.number,
};
