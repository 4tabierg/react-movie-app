import React, {useState} from 'react'
import ResultCard from './ResultCard'

export const ResultList = () => {
    const [results, setResults] = useState([]);
    return (
        <div className="movie-page">
            <div className="container">
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

    )
}
