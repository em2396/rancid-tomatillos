//      <img className="poster" src={backDropPath} alt={`Backdrop for ${title}`}></img>


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


// average_rating: 5.111111111111111
// backdrop_path: "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg"
// id: 539885
// poster_path: "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg"
// release_date: "2020-07-02"
// title: "Ava"