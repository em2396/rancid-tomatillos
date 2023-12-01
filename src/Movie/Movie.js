import './Movie.css';

export default function Movie({title, releaseDate, averageRating, posterImage, displayMovie, id}) {
    return(
        <div onClick={() => displayMovie(id)}>
            <h1>{title}</h1>
            <img className="poster" src={posterImage} alt={`Poster for ${title}`}></img>
            <p>This movie was released on {releaseDate} with an average rating of {averageRating}/10.</p>
            <button className="heart-button">Heart</button>
            <button className="five-star-rating">Five Star Rating Lives Here</button>
        </div>
    )
}
