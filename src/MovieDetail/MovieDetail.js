export default function MovieDetail({selectedMovie, displayHomePage}) {
    console.log("selectedMovie",selectedMovie)
    return (
        <div>
            <h1>{selectedMovie.title}</h1>
            <img className="singlePoster" src={selectedMovie.poster_path} alt={`Poster for ${selectedMovie.poster_path}`}></img>
            <img className="singlePoster" src={selectedMovie.backdrop_path} alt={`Poster for ${selectedMovie.backdrop_path}`}></img>
            <p>Release date: {selectedMovie.release_date}</p>
            <p>Overview: {selectedMovie.overiew}</p>
            <p>Average rating: {(selectedMovie.average_rating).toFixed(2)}/10</p>
            <p>Genre: {selectedMovie.genres}</p>
            <button onClick={(() => displayHomePage())}>Back To Home</button>
        </div>
    )
}