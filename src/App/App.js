import { useState } from 'react';
import movieData from '../sampleData';
import Header from '../Header/Header'
import Movies from '../Movies/Movies';
import MovieDetail from '../MovieDetail/MovieDetail'
import './App.css';

function App() {
  const [ movies, setMovies ] = useState(movieData.movies)
  // const movies = movieData.movies

  const [selectedMovie, displaySelected] = useState(null);

  function displayMovie(id) {
    const findMovies = movies.find(selected => {
      console.log(selected, 'each individual movie')
      return selected.id === id;
    })
    console.log(findMovies, 'findMovies')
    displaySelected(findMovies)
  }

  function singleMovie() {
    return (
      <MovieDetail selectedMovie={selectedMovie}/>
      )
    }
    
    
    function allMovies() {
      return (
        <div className="App">
        <Header />
        <Movies movies={movies} displayMovie={displayMovie} />
    </div>
      )
    }

    return (!selectedMovie ? allMovies() : singleMovie())
}

export default App;


//QUESTION:
//1. What's the purpose of getting sample data... rather than a GET request