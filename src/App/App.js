import { useState } from 'react';
import movieData from '../sampleData';
import Header from '../Header/Header'
import Movies from '../Movies/Movies';
import MovieDetail from '../MovieDetail/MovieDetail'
import './App.css';

function App() {
  const [ movies, setMovies ] = useState(movieData.movies)
  // const movies = movieData.movies

  const [selectedMovie, setSelectedMovie] = useState(null);

  function displayMovie(id) {
    const findMovie = movies.find(selected => {
      // console.log(selected, 'each individual movie')
      return selected.id === id;
    })
    // console.log(findMovies, 'findMovies')
    setSelectedMovie(findMovie)
  }

  function displayHomePage() {
    setSelectedMovie(null)
    return(
    <div className="App">
      <Header />
      {selectedMovie &&  <MovieDetail selectedMovie={selectedMovie}/>}
      {!selectedMovie && <Movies movies={movies} displayMovie={displayMovie}/>}
    </div>
    )
  }

  return (
    <div className="App">
      <Header />
      {selectedMovie &&  <MovieDetail selectedMovie={selectedMovie} displayHomePage={displayHomePage}/>}
      {!selectedMovie && <Movies movies={movies} displayMovie={displayMovie}/>}
    </div>
  )
}

export default App;


//QUESTION:
//1. What's the purpose of getting sample data... rather than a GET request