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

  // const [ isLiked, setLiked ] = useState(false);
  // console.log("isLiked with object as initial state",isLiked)
  const [ likedMovies, setLikedMovies ] = useState([]);

  function toggleLikeButton(id) {
    const likedMovie = movies.find(selectedMovie => {
      return selectedMovie.id === id;
    })

    const isMovieLiked = likedMovies.includes(likedMovie);

    setLikedMovies(prevLikedMovies => {
      if (!isMovieLiked) {
        // setLikedMovies(prevLikedMovies => prevLikedMovies.filter(movie => movie.id !== likedMovie.id))
        // If the movie is already liked, remove it from likedMovies
        return [...prevLikedMovies, likedMovie];
      } else {
        // const updatedLikedMovies = likedMovies.filter((movie) => movie.id !== likedMovie.id)
        //By using the callback version of setLikedMovies, you make sure that you are working with the latest state when updating it. The callback function receives the previous state as an argument (prevLikedMovies), and you can safely use it to update the state based on the previous state.
        // setLikedMovies(updatedLikedMovies => [ ...updatedLikedMovies, likedMovie])
         // If the movie is not liked, add it to likedMovies
        return prevLikedMovies.filter(movie => movie.id !== likedMovie.id);
      }
    })
    console.log("likedMovies",likedMovies)
  }

  // const likedMovies = [ ]

  // function toggleLikeButton(id) {
    // const likedMovie = movies.find(selectedMovie => {
    //   return selectedMovie.id === id;
    // })
  //   // console.log("likedMovie",likedMovie)
  //   likedMovies.push(likedMovie)
  //   if (likedMovies.includes(likedMovie)) {
  //     setLiked(!isLiked)
  //   }
  //   isLiked ? setLiked(isLiked) : setLiked(!isLiked)
  //   // setLiked(!isLiked)
  //   // setLiked(likedMovie)
  //   console.log("isLiked in App",isLiked)
  // }

  // function toggleLikeButton(id) {
  //   const likedMovie = movies.find(selectedMovie => selectedMovie.id === id);

  //   const updatedLikedMovies = [ ...likedMovie ]
  //   console.log(updatedLikedMovies)
  
  //   // Check if the movie is already in likedMovies:
  //   //The .some() method is a built-in JavaScript array method that checks whether at least one element in the array satisfies a given condition. It returns true if at least one element meets the condition, and false otherwise.
  //   // const isMovieLiked = likedMovies.some(movie => movie.id === likedMovie.id);
  //   const isMovieLiked = updatedLikedMovies.includes(likedMovie);
  //   console.log("isMovieLiked",isMovieLiked)

  //   if (isMovieLiked) {
  //     // If the movie is already liked, remove it from likedMovies
  //     const updatedLikedMovies = likedMovies.filter(movie => movie.id !== likedMovie.id);
  //     setLikedMovies(updatedLikedMovies);
  //   } else {
  //     // If the movie is not liked, add it to likedMovies
  //     setLikedMovies(prevLikedMovies => [...prevLikedMovies, likedMovie]);
  //   }
  // }  



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
      <Movies movies={movies} displayMovie={displayMovie} currentMovieIndex={currentMovieIndex} likedMovies={likedMovies} toggleLikeButton={toggleLikeButton}
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
