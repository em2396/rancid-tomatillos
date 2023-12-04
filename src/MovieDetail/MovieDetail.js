import PropTypes from 'prop-types'
import './MovieDetail.css'
export default function MovieDetail({selectedMovie, selectedVideo, displayHomePage}) {
    //some movies have 2 videos, use conditional rendering
    // console.log("selectedMovie",selectedMovie)
    console.log("selectedVideo",selectedVideo)

    const backgroundImageStyle = {
        backgroundImage: `url(${selectedMovie.backdrop_path})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center'
    }

    return (
        <>
        <button onClick={(() => displayHomePage())}>Back To Home</button>
        {/* <img className="backdrop-poster" src={selectedMovie.backdrop_path} alt={`Poster for ${selectedMovie.backdrop_path}`}></img> */}
        <div className="selected-movie">
            <section className='img-section' style={backgroundImageStyle}>
                <div className='img-overlay'> 
                    <img src={selectedMovie.poster_path} alt={`Poster for ${selectedMovie.poster_path}`}></img>
                    <p>Release date: {selectedMovie.release_date}</p>
                    <p>Overview: {selectedMovie.overiew}</p>
                    <p>Average rating: {(selectedMovie.average_rating).toFixed(2)}/10</p>
                    <p>Genre: {selectedMovie.genres.join(', ')}</p>
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
            </section>
        </div>
        </>
    )
}

MovieDetail.propTypes = {
    selectedMovie: PropTypes.object.isRequired,
    selectedVideo: PropTypes.object.isRequired,
    displayHomePage: PropTypes.func.isRequired
}

// App.propTypes = {
//     movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       poster_path: PropTypes.string,
//       average_rating: PropTypes.number,
//       id: PropTypes.number,
//     })
//     ).isRequired,
//     chosenMovie: PropTypes.shape({
//     title: PropTypes.string,
//     backdrop_path: PropTypes.string,
//     poster_path: PropTypes.string,
//     average_rating: PropTypes.number,
//     release_date: PropTypes.string,
//     id: PropTypes.number,
//     }).isRequired,
//    };