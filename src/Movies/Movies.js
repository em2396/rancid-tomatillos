import './Movies.css'
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';

const Movies = ({movies, displayMovie, currentMovieIndex, toggleLikeButton, likedMovies, windowSize})  => {
    const numOfMovies = windowSize < 1200 ? 3 : 7;
    // const isMediumScreen =  window.innerWidth <= 800;
    const isSmallScreen = window.innerWidth <= 500;
    
    let movieCards;

    if (isSmallScreen) {
        // Render all movies
        movieCards = movies.map((movie) => (
          <Movie
            title={movie.title}
            releaseDate={movie.release_date}
            averageRating={(movie.average_rating).toFixed(2)}
            posterImage={movie.poster_path}
            backDropPath={movie.backdrop_path}
            id={movie.id}
            key={movie.id}
            displayMovie={displayMovie}
            likedMovies={likedMovies}
            toggleLikeButton={toggleLikeButton}
          />
        ));
    } else {
    movieCards = movies.slice(currentMovieIndex, currentMovieIndex + numOfMovies).map((movie) => {
        return(
            <Movie 
            title={movie.title}
            releaseDate={movie.release_date}
            averageRating={(movie.average_rating).toFixed(2)}
            posterImage={movie.poster_path}
            backDropPath={movie.backdrop_path}
            id={movie.id}
            key={movie.id}
            displayMovie={displayMovie}
            likedMovies={likedMovies}
            toggleLikeButton={toggleLikeButton}
            />
        )})
    };

    return(
        <div className="movies-container">
            {movieCards}
        </div>
    )
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired , 
    displayMovie: PropTypes.func.isRequired, 
    currentMovieIndex: PropTypes.number.isRequired
}
export default Movies