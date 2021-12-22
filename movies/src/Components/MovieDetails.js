import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'


function MovieDetails() {
    const params = useParams()
  /* const [movieDetail, setMovieDetail] = useState({
    Title: '',
    Poster: '',
    
  })
  const listOfMovies = useSelector((state) => state.movies)

   useEffect(() => {
    setMovieDetail(
      listOfMovies.find(
        (element) => element.Title.toString() == params.Title,
      ),
    )
  }, []) 

  console.log(movieDetail,'moviedetail') */
  return <div>
      
  </div>
}

export default MovieDetails



