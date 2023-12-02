import { useState, useEffect } from 'react';
import movieData from '../sampleData';
import Header from '../Header/Header'
import Movies from '../Movies/Movies';
import MovieDetail from '../MovieDetail/MovieDetail'
import './App.css';

function App() {
  const [ movies, setMovies ] = useState([])
  // const movies = movieData.movies
  const [selectedMovie, setSelectedMovie] = useState(null);
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

  // const getSingleMovie = (id) => {
    
  // }
  
  function displayMovie(id) {
    const findMovie = movies.find(selected => {
      // console.log(selected, 'each individual movie')
      return selected.id === id;
    })
    // console.log(findMovies, 'findMovies')
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

  return (
    <div className="App">
      <Header />
      {selectedMovie ?  <MovieDetail selectedMovie={selectedMovie} displayHomePage={displayHomePage} />: <Movies movies={movies} displayMovie={displayMovie}/>}
    </div>
  )
}

export default App;


//QUESTION:
//1. What's the purpose of getting sample data... rather than a GET request