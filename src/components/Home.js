import React, { useState } from 'react'
import { ResultCard } from "./ResultCard";


const Home = () => {

    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovies = async (e) => {

        setSearchValue(e.target.value);

        const apiKey = 'dfbf0d2ccd7a5faa63a22c477095fca1'
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${e.target.value}`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (!responseJson.errors) {
            setResults(responseJson.results);
        } else {
            setResults([]);
        }
    };


    return (

        <div className="a-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Search for a movie"
                            value={searchValue}
                            onChange={getMovies}
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
        
    );
}

export default Home