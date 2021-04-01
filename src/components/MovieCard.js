import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

const MovieCard = ({ movie }) => {

    const { dispatch } = useContext(AppContext)
    const handleRemoveMovie = (movie) => {
        dispatch({
            type: 'REMOVE_MOVIE',
            payload: movie.id
        })
    }

    return (
        <div className="image-container">
            <div className='overlay'></div>
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />
            <div className="inner-card-controls">
                <button className="ctrl-btn" onClick={() => handleRemoveMovie(movie)}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default MovieCard
