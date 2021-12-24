import React, { useEffect } from 'react'
import { GETAllMovies } from '../Redux/Actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import SearchMovie from './SearchMovie'
import NavBar from './NavBar'

function MovieList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GETAllMovies())
  }, [dispatch])

  const newmovie = useSelector((state) => state.newMovie)

  const listOfMovies = useSelector((state) => state.movies)

  const movies = [...listOfMovies, newmovie]

  console.log(movies, 'movielist movies')
  return (
    <div>
      <NavBar />
      <SearchMovie />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
          marginTop: '30px',
          borderColor:'red',
          borderStyle:'solid',

        }}
      >
        {movies.length > 0 ? (
          <div >
            {movies.map((movie, index) => (
              <MovieCard key={index} x={movie} />
            ))}
          </div>
        ) : (
          'no movies'
        )}
      </div>
    </div>
  )
}

export default MovieList
