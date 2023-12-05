import PropTypes from 'prop-types';
import './MovieDetail.css';
import { useParams } from 'react-router-dom';

export default function MovieDetail({ selectedMovie, selectedVideo}) {
  // console.log('selectedVideo', selectedVideo);
// { selectedMovie, selectedVideo, displayHomePage }
  

  console.log("useParams in MOvieDetails:",useParams())
  const movieDetails = useParams().movieDetails
  console.log("movieDetails",movieDetails)
  return (
    <h1>here</h1>
    
    // <div className="selected-movie">
    //   <div className="backdrop-container">
    //     <img className="backdrop-poster" src={selectedMovie.backdrop_path} alt={`Poster for ${selectedMovie.backdrop_path}`} />
    //     <div className="on-single-image">
    //         <img className="single-post" src={selectedMovie.poster_path} alt={`Poster for ${selectedMovie.poster_path}`} />
    //         <div className="video-and-text">
    //             <iframe className="video"
    //             title="video player"
    //             width="560"
    //             height="315"
    //             src={`https://www.youtube.com/embed/${selectedVideo.key}`}
    //             frameBorder="0"
    //             allowFullScreen
    //             ></iframe>
    //             <p className="single-text"><b>Release date:</b> {selectedMovie.release_date} <br></br>
    //             <b>Overview:</b> {selectedMovie.overview} <br></br>
    //             <b>Average rating:</b> {(selectedMovie.average_rating).toFixed(2)}/10 <br></br>
    //             <b>Genre:</b> {selectedMovie.genres.join(', ')}</p>
    //             {/* Add react router change link here */}
    //             <button className="back-to-home" onClick={() => displayHomePage()}>Back To Home</button>
    //         </div>
    //     </div>
    //   </div>
    // </div>
  );
}

MovieDetail.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  selectedVideo: PropTypes.object.isRequired,
  displayHomePage: PropTypes.func.isRequired,
};

