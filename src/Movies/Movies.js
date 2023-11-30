import './Movies.css'
import Movie from '../Movie/Movie';
export default function Movies({movies}) {
    
    const movieCards = movies.map((movie) => {
        console.log("movies",movies)
        return(
            <Movie 
            title={movie.title}
            releaseDate={movie.release_date}
            averageRating={(movie.average_rating).toFixed(2)}
            posterImage={movie.poster_path}
            backDropPath={movie.backdrop_path}
            id={movie.id}
            key={movie.id}
            />
        )
    })
    return(
        <div className="movies-container">
            {movieCards}
        </div>
    )
}

