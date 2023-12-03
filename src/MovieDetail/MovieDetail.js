export default function MovieDetail({selectedMovie, selectedVideo, displayHomePage}) {
    //some movies have 2 videos, use conditional rendering
    // console.log("selectedMovie",selectedMovie)
    // console.log("selectedVideo",selectedVideo)
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
            <h2>Videos</h2>
            <div className="video-player">
            <iframe
              title="video player"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.key}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            </div>
            
        </div>
    )
}

