import { useState } from 'react'

import { Navbar } from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Search from './Components/Navbar/Search';
import NavResults from './Components/Navbar/NavResults';
import List from './Components/Body/List';
import WatchedBox from './Components/Body/Watched/WatchedBox';
import MovieList from './Components/Body/Movie/MovieList';
import Summary from './Components/Body/Watched/Summary';
import WatchedList from './Components/Body/Watched/WatchedList';


function App() {
  const tempMovieData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt6751668",
      Title: "Parasite",
      Year: "2019",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
  ];

  const tempWatchedData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ];
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <div>

        {/* Component composition method  and are of two types*/}
        {/* 1) Composition Using children */}
        <Navbar>
          <Search />
          <NavResults movies={movies} />
        </Navbar>
        <Body>
          <List>
            <MovieList movies={movies} />
          </List>
          <List>
            <Summary watched={watched} />
            <WatchedList watched={watched} />
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
