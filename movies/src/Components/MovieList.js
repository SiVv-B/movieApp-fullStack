import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GETAllMovies } from '../Redux/Actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

function MovieList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GETAllMovies())
  }, [dispatch])

  const newmovie = useSelector((state) => state.newMovie)

  const listOfMovies = useSelector((state) => state.movies)

  const movies = [...listOfMovies, newmovie]
  console.log(movies)
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        {movies.length > 0
          ? (<div> 

            <Link to={`/movie/${listOfMovies.id}`}
            style={{textDecoration:'none', color:'black'}}>
            {movies.map((movie, index) => <MovieCard key={index} x={movie} />)}
            </Link>
            </div>)
          : 'no movies'}
      </div>
    </div>
  )
}

export default MovieList
