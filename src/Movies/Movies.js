import './Movies.css'
import Movie from '../Movie/Movie';
export default function Movies({movies}) {
    
    const movieCards = movies.map((movie) => {
        return(
            <Movie 
            title={movie.title}
            releaseDate={movie.release_date}
            averageRating={movie.average_rating}
            posterImage={movie.poster_path}
            backDropPath={movie.backdrop_path}
            id={movie.id}
            key={movie.id}
            />
        )
    })
}

