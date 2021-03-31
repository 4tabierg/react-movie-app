import React, { useContext } from 'react'
import MovieCard from '../components/MovieCard'
import AppContext from '../context/AppContext';


const Favorites = () => {

    const { favorites } = useContext(AppContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Favorites</h1>

                    {/* <span className="count-pill">
                {favorites.length} {favorites.length === 1 ? "Movie" : "Movies"}
              </span> */}
                </div>

                {favorites.length > 0 ? (
                    <div className="movie-grid">
                        {favorites.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} type="favorites" />
                        ))}

                    </div>
                ) : (
                    <div>
                        <h2 className="no-movies">No movies found.</h2>
                        <img style={{width:'600px', height:'600px', marginLeft:'290px'}} src="/images/notfound.png" alt="not-found"></img>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Favorites;