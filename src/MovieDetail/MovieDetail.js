//      <img className="poster" src={backDropPath} alt={`Backdrop for ${title}`}></img>


export default function MovieDetail({selectedMovie}) {
    console.log(selectedMovie)
    return (
        <div>
            <h1>{selectedMovie.title}</h1>
            <img className="singlePoster" src={selectedMovie.poster_path} alt={`Poster for ${selectedMovie.poster_path}`}></img>
            <img className="singlePoster" src={selectedMovie.backdrop_path} alt={`Poster for ${selectedMovie.backdrop_path}`}></img>
            <p>Release date: 2021</p>
            <p>overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!"</p>
            <p>average_rating: 6</p>
            <p>genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!"</p>
        </div>
    )
}


// average_rating: 5.111111111111111
// backdrop_path: "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg"
// id: 539885
// poster_path: "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg"
// release_date: "2020-07-02"
// title: "Ava"