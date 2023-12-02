import { useState, useEffect } from 'react';
import movieData from '../sampleData';
import Header from '../Header/Header'
import Movies from '../Movies/Movies';
import MovieDetail from '../MovieDetail/MovieDetail'
import './App.css';

function App() {
  const [ movies, setMovies ] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
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
      console.log("movieData",moviesData)
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
    setSelectedMovie(findMovie)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2//movies/${findMovie.id}`)
    .then(response => {
      if (!response.ok) {
        console.log("error in response",error)
        throw new Error (`${error}: Failed to fetch data`);
    }
      return response.json()
    })
    .then(singleMovie => {
      console.log("singleMovie",singleMovie.movie)
      setSelectedMovie(singleMovie.movie)
    })
    .catch(error => {
      console.log('error in catch', error)
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
    <div className="App">
      <Header />
      <button className="arrow left-arrow" onClick={arrowLeft}>&lt;</button>
      <button className="arrow right-arrow" onClick={arrowRight}>&gt;</button>
      {selectedMovie ?  <MovieDetail selectedMovie={selectedMovie} displayHomePage={displayHomePage} />: <Movies movies={movies} displayMovie={displayMovie} currentMovieIndex={currentMovieIndex}/>}
    </div>
  )
}

export default App;
