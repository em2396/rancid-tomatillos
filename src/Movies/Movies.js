import './Movies.css'
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
export default function Movies({movies, displayMovie, currentMovieIndex, toggleLikeButton, likedMovies}) {
    console.log("isLiked in Movies",likedMovies)
    
    const movieCards = movies.slice(currentMovieIndex, currentMovieIndex + 7).map((movie) => {
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
        )
    })
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
