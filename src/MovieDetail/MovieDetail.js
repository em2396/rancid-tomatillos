import PropTypes from 'prop-types';
import './MovieDetail.css';

export default function MovieDetail({ selectedMovie, selectedVideo, displayHomePage }) {
  console.log('selectedVideo', selectedVideo);

  return (
    <div className="selected-movie">
      <button onClick={() => displayHomePage()}>Back To Home</button>
      <div className="backdrop-container">
        <img className="backdrop-poster" src={selectedMovie.backdrop_path} alt={`Poster for ${selectedMovie.backdrop_path}`} />
        <div className="on-single-image">
          <img className="single-post" src={selectedMovie.poster_path} alt={`Poster for ${selectedMovie.poster_path}`} />
          <div className="video-player">
            <iframe
              title="video player"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.key}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="single-text">Release date: {selectedMovie.release_date}
            Overview: {selectedMovie.overview}
            Average rating: {(selectedMovie.average_rating).toFixed(2)}/10
            Genre: {selectedMovie.genres}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  selectedVideo: PropTypes.object.isRequired,
  displayHomePage: PropTypes.func.isRequired,
};

