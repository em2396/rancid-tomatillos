import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Movies from '../Movies/Movies';
import MovieDetail from '../MovieDetail/MovieDetail'
import Error from '../Error/Error';
import { Routes, Route } from 'react-router-dom'
import './App.css';

export default function App() {
  const [ movies, setMovies ] = useState([])
  const [ selectedMovie, setSelectedMovie ] = useState(null);
  const [ selectedVideo, setSelectedVideo ] = useState(null);
  const [ currentMovieIndex, setCurrentMovieIndex ] = useState(0);
  const [ error, setError ] = useState('')
  const [ likedMovies, setLikedMovies ] = useState([]);

  function toggleLikeButton(id) {
    const likedMovie = movies.find(selectedMovie => {
      return selectedMovie.id === id;
    })

    const isMovieLiked = likedMovies.includes(likedMovie);

    setLikedMovies(prevLikedMovies => {
      if (!isMovieLiked) {
        return [...prevLikedMovies, likedMovie];
      } else {
        return prevLikedMovies.filter(movie => movie.id !== likedMovie.id);
      }
    })
    console.log("likedMovies",likedMovies)
  }

  useEffect(() => {
    getMovies()
  },[])

  const getMovies = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
        // console.log("error in response",error)
        throw new Error (`${error}: Failed to fetch data`);
    }
      return response.json()
    })
    .then(moviesData => {
      setMovies(moviesData.movies)
    })
    .catch(error => {
      setError(error.message)
    })
  }
  
  function displayMovie(id) {
    const findMovie = movies.find(selected => {
      return selected.id === id;
    })
    const apiEndpoints = [
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${findMovie.id}`,
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${findMovie.id}/videos`,
    ];

    Promise.all(apiEndpoints.map(endpoint => fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        // console.log("error in response",error)
        throw new Error (`${error}: Failed to fetch data`);
    }
      return response.json()
    })
  ))
  .then(movieDetails => {
    if (movieDetails.length === 2) {
      const [movieObject, videosObject] = movieDetails;
      const movie = movieObject && movieObject.movie;
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
    .catch(error => {
      setError(error.message)
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
    <main className="App">
      <Routes>
        <Route
          path="/"
          element= {
            <>
            {(error.length > 0) ? (<Error error={error} message="The page you're looking for doesn't exist."/>) : (
              <>
              <Header />
              <button className="arrow left-arrow" onClick={arrowLeft}>&lt;</button>
              <button className="arrow right-arrow" onClick={arrowRight}>&gt;</button>
              <Movies movies={movies} displayMovie={displayMovie} currentMovieIndex={currentMovieIndex} likedMovies={likedMovies} toggleLikeButton={toggleLikeButton}/>
              </>)
              }
            </>
          }
        />
        <Route path="/:movies" element={<MovieDetail selectedMovie={selectedMovie} selectedVideo={selectedVideo} displayHomePage={displayHomePage}/>}/>
        {/* if route doesn't exist */}
        <Route path='/*' element={<Error error={error} message="The page you're looking for doesn't exist."/>}/>
      </Routes>
    </main>
  )
};

App.propTypes = {
  selectedMovie: PropTypes.object,
  selectedVideo: PropTypes.object,
  displayHomePage: PropTypes.func,
  movies: PropTypes.array,
  displayMovie: PropTypes.func,
  currentMovieIndex: PropTypes.number,
};

{/* {selectedMovie ?  <MovieDetail selectedMovie={selectedMovie} selectedVideo={selectedVideo} displayHomePage={displayHomePage} />: 
<>
<Header />
<button className="arrow left-arrow" onClick={arrowLeft}>&lt;</button>
<button className="arrow right-arrow" onClick={arrowRight}>&gt;</button>
<Movies movies={movies} displayMovie={displayMovie} currentMovieIndex={currentMovieIndex} likedMovies={likedMovies} toggleLikeButton={toggleLikeButton}
/>
</>} */}