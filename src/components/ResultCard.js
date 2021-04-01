import React, {useContext} from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AppContext from '../context/AppContext';


export const ResultCard = ({ movie }) => {

    const { dispatch, favorites } = useContext(AppContext)

    let favoriteMovies = favorites.find(m => m.id === movie.id)

    const favoritesCheck = favoriteMovies ? true : false

    const handleAddMovie = (movie) => {
        dispatch({
            type: 'ADD_MOVIE',
            payload: movie
        })
    }

    const handleRemoveMovie = (movie) => {
        dispatch({
            type: 'REMOVE_MOVIE',
            payload: movie.id
        })
    }



    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="filler-poster" />
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                    </h4>
                </div>
                    {favoritesCheck ? 
                    <button
                    className='btn-remove'
                    onClick={() => handleRemoveMovie(movie)}
                    >
                        Remove From Favorites
                    </button> :
                    <button
                    className='btn'
                    onClick={() => handleAddMovie(movie)}
                    >
                        Add To Favorites
                    </button>
                }
            </div>
        </div>
    )
}


// {favoritesCheck ? 
//     <Button
//     startIcon= {<HighlightOffIcon/>}
//     style={{width: '250px', marginBottom: '30px', marginLeft: '110px', backgroundColor: '#E50914', color: '#fff'}}
//     onClick={() => handleRemoveMovie(movie)}
//     >
//         Remove From Favorites
//     </Button> :
//     <Button
//     startIcon= {<AddCircleOutlineIcon />}
//     style={{width: '200px', marginBottom: '30px', marginLeft: '160px', backgroundColor: '#041c45', color: '#fff'}}
//     onClick={() => handleAddMovie(movie)}
//     >
//         Add To Favorites
//     </Button>
// }