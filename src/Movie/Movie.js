import './Movie.css';

export default function Movie({title, releaseDate, averageRating, posterImage, backDropPath,id}) {
    return(
        <div>
            <h1>{title}</h1>
            <img alt="poster image">{posterImage}</img>
            <img alt="backdrop image"> {backDropPath}</img>
            <p>This movie was released on {releaseDate} with an average rating of {averageRating}</p>
            <button className="heart-button">Heart</button>
            <button className="five-star-rating">Five Star Rating Lives Here</button>
        </div>
    )
}
