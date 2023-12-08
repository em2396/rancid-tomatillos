import PropTypes from 'prop-types';
import './MovieDetail.css';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetail({ selectedMovie, selectedVideo, displayHomePage}) {
    if(!selectedMovie) {
        return (
        <>
            <p className="error">404 Page Not Found: The page you are looking for doesn't exist</p>
            <Link to="/"> 
            <button className="back-to-home">Back To Home</button>
            </Link>
        </>
        ) 
    }
    const isHorror = selectedMovie.genres.includes('Horror');

    return (
        // <div className="selected-movie">
        <div className={`backdrop-container ${isHorror ? 'horror' : ''}`}>
                <img className="backdrop-poster" src={selectedMovie.backdrop_path} alt={`Poster for ${selectedMovie.backdrop_path}`} />
                <div className="on-single-image">
                    <img className="single-post" src={selectedMovie.poster_path} alt={`Poster for ${selectedMovie.poster_path}`} />
                    <div className="video-and-text">
                        <iframe className="video"
                        title="video player"
                        width="660"
                        height="915"
                        src={`https://www.youtube.com/embed/${selectedVideo.key}`}
                        frameBorder="0"
                        allowFullScreen
                        ></iframe>
                        <p className="single-text"><b>Release date:</b> {selectedMovie.release_date} <br></br>
                        <b>Overview:</b> {selectedMovie.overview} <br></br>
                        <b>Average rating:</b> {(selectedMovie.average_rating).toFixed(2)}/10 <br></br>
                        <b>Genre:</b> {selectedMovie.genres.join(', ')}</p>
                        <Link to="/"> 
                            <button className="back-to-home" onClick={() => displayHomePage()}>Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        // </div>
  );
}

MovieDetail.propTypes = {
  selectedMovie: PropTypes.object,
  selectedVideo: PropTypes.object,
  displayHomePage: PropTypes.func.isRequired,
};

