import './Movie.css';
import PropTypes from 'prop-types'
import { useState } from 'react';

export default function Movie({title, releaseDate, averageRating, posterImage, displayMovie, id, isLiked,toggleLikeButton}) {

    console.log("isLiked in Movie",isLiked)
    return(
        <div className="poster-container">
            {/* <h1>{title}</h1> */}
            <img onClick={() => displayMovie(id)} className="poster" src={posterImage} alt={`Poster for ${title}`}></img>
            {/* <button className="on-image">Heart</button> */}
            <section className="description-buttons-container">
                <p className="on-image">This movie was released on {releaseDate} with an average rating of {averageRating}/10.</p>
                <section className="rating-heart-container on-image">
                    <div className="five-star-rating on-image">Five Star Rating Lives Here</div>
                    <div className="on-image" onClick={() => toggleLikeButton(id)}>
                    {!isLiked ? (
                    <svg className="heart on-image" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                    </svg> ) : (
                    <svg className="filled-heart on-image" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                     </svg>
                    )}
                    </div>
                </section>
            </section>
        </div>
    )
}

Movie.propTypes = {
    isLiked: PropTypes.bool,
};
//This works for the heart button but it loses its heart when you arrow it out of the image

