import './Movies.css'
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';

const Movies = ({movies, displayMovie, currentMovieIndex, toggleLikeButton, likedMovies})  => {
    //creating a boolean variable based on current width of window. Checking if window width is less than or equal to 55em
    //1em = 16px;
    //
    const isMediumScreen =  window.innerWidth <= 800;
    const isSmallScreen = window.innerWidth <= 375;
    
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
    movieCards = movies.slice(currentMovieIndex, currentMovieIndex + (isMediumScreen ? 3 : 7)).map((movie) => {
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