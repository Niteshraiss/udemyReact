import { useEffect, useState } from 'react'

import { Navbar } from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Search from './Components/Navbar/Search';
import NavResults from './Components/Navbar/NavResults';
import List from './Components/Body/List';
import WatchedBox from './Components/Body/Watched/WatchedBox';
import MovieList from './Components/Body/Movie/MovieList';
import Summary from './Components/Body/Watched/Summary';
import WatchedList from './Components/Body/Watched/WatchedList';
import Loader from './Components/Body/Loader';
import ErrorMessage from './Components/Body/ErrorMessage';
import { func } from 'prop-types';
import MovieDetails from './Components/Body/Movie/MovieDetails';


function App() {
  const KEY = '51aa3590'
  const [movies, setMovies] = useState();
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("null")


  useEffect(
    function () {
      const controller = new AbortController()
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
            , { signal: controller.signal })

          if (!res.ok) throw new Error("Something went wrong with fetchng movies")
          const data = await res.json()
          if (data.Response === 'False') throw new Error("Movie not found")
          setMovies(data.Search)
        setError("")
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message)
          }
        } finally {
          setIsLoading(false)
        }
      }
      if (query.length < 3) {
        setMovies([])
        setWatched([])
        setError('')
        return;
      }
      handleCloseMovie()
      fetchMovies();
      return function () {
        controller.abort();
      }
    }, [query])

  function handleSelectMove(id) {
    setSelectedId(selectedId => id == selectedId ? null : id)
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  function handleAddWatched(movie) {
    setWatched(watched => [...watched, movie])
  }
  function handleDeleteWatched(id) {
    setWatched(watched => watched.filter((movie) => movie.imdbID !== id))
  }
  return (
    <>
      <div>

        {/* Component composition method  and are of two types*/}
        {/* 1) Composition Using children */}
        <Navbar>
          <Search query={query} setQuery={setQuery} />
          <NavResults movies={movies} />
        </Navbar>
        <Body>
          <List>
            {isLoading && <Loader />}
            {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMove} />}
            {error && <ErrorMessage message={error} />}
          </List>
          <List>
            {
              selectedId ?
                <MovieDetails
                  selectedId={selectedId}
                  onCloseMovie={handleCloseMovie}
                  KEY={KEY}
                  onAddWatched={handleAddWatched}
                  watched={watched}
                />
                :
                <>
                  <Summary watched={watched} />
                  <WatchedList watched={watched} onDeleteWatched={handleDeleteWatched} />
                </>
            }
          </List>
        </Body>


        {/*2) Now this is passing elements as a prop instead of children*/}
        {/* also know as Composition Using Explicit Props */}
        {/* <Body>
          <List element={<MovieList movies={movies} />} />
          <List element={
            <>
              <Summary watched={watched} />
              <WatchedList watched={watched} />
            </>
          } />
        </Body> */}
        {/* Till here */}
      </div>
    </>
  )
}

export default App
