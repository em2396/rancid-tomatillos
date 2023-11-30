import { useState } from '.react';
import movieData from '../sampleData';
console.log("movieData", movieData)
import Header from '../Header/Header'
import Movies from '../Movies/Movies';
import './App.css';

function App() {
  const movieData = movieData
  const [ movies, setMovies ] = useState([movieData])

  // function getMovies(movieData) {
  //   setMovies(movieData.movies)
  // }

  return (
    <div className="App">
        <Header />
        <Movies movies={movies}/>
    </div>
  );
}

export default App;


//QUESTION:
//1. What's the purpose of getting sample data... rather than a GET request