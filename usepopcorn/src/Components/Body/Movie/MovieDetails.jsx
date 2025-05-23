import React, { useEffect, useState } from 'react'
import StarRating from '../../../Star/StarRating';
import Loader from '../Loader';

const MovieDetails = ({ selectedId, onCloseMovie, KEY, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [userRating, setUserRating] = useState('')
  const isWatched = watched.map(movie => movie.imdbID).includes(selectedId)
  const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre
  } = movie;

  useEffect(function () {
    function callback(e) {
      if (e.code === 'Escape') {
        onCloseMovie()
      }
    }
    document.addEventListener('keydown', callback)
    return function () {      document.removeEventListener('keydown', callback)
    }
  }, [onCloseMovie])

  useEffect(function () {
    async function getMovieDetails() {
      setIsLoading(true)
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`)
      const data = await res.json()
      setMovie(data)
      setIsLoading(false)
    }
    getMovieDetails()
  }, [selectedId])

  useEffect(function () {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return function () {
      document.title = "Use Popcorn" //clean up function

    }
  }, [title])

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
    }
    onAddWatched(newWatchedMovie)
    onCloseMovie();
  }
  return (
    <div className='details'>
      {
        isLoading ? <Loader /> :
          <>
            <header>
              <button className="btn-back" onClick={onCloseMovie}>
                &larr;
              </button>
              <img src={poster} alt={movie} />
              <div className="details-overview">
                <h2>{title}</h2>
                <p>{released} &bull; {runtime}</p>
                <p>{genre}</p>
                <p><span>⭐</span> {imdbRating} IMdb Rating</p>
              </div>
            </header>
            <section>
              <div className="rating">
                {
                  !isWatched ? (
                    <>
                      <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
                      {userRating > 0 && <button className="btn-add" onClick={handleAdd}>+ Add to list </button>}
                    </>
                  ) : (<p>You rated this movie with {watchedUserRating}⭐</p>)}
              </div>
              <p>
                <em>{plot}</em>
              </p>
              <p>Starring {actors}</p>
              <p>Directed by {director}</p>
            </section>
          </>
      }
    </div>
  )
}

export default MovieDetails