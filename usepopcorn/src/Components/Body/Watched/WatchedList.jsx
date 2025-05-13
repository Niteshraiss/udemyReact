import React from 'react'
import { WatchedMovie } from './WatchedMovie'

const WatchedList = ({ watched,onDeleteWatched }) => {
    if (!watched || watched.length === 0)
        return <p className="message">No watched movies yet!</p>;
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched}/>
            ))}
        </ul>
    )
}
export default WatchedList