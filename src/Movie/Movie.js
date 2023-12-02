import './Movie.css';

export default function Movie({title, releaseDate, averageRating, posterImage, displayMovie, id}) {
    return(
        <div className="poster-container" onClick={() => displayMovie(id)}>
            {/* <h1>{title}</h1> */}
            <img className="poster" src={posterImage} alt={`Poster for ${title}`}></img>
            <p className="on-image">This movie was released on {releaseDate} with an average rating of {averageRating}/10.</p>
            {/* <button className="on-image">Heart</button> */}
            <img src="" className="heart-button"></img>
            <button className="on-image">Five Star Rating Lives Here</button>
        </div>
    )
}


