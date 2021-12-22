import React, { useState } from 'react'
import { newMovie } from '../Redux/Actions'
import { useDispatch } from 'react-redux'

function AddMovie() {
  const [movie, setMovie] = useState({ Title: ' ', Poster: ' ', Year: '' })
  const dispatch = useDispatch()
  const handelChange = (event) => {
    setMovie({ ...movie, [event.target.id]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(newMovie(movie))
    setMovie({ title: ' ', poster: ' ', year: '' })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="Poster" />
          <input
            onChange={handelChange}
            value={movie.Poster}
            type="text"
            className="form-control"
            id="Poster"
            placeholder="Poster"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Title" />
          <input
            onChange={handelChange}
            value={movie.Title}
            type="text"
            className="form-control"
            id="Title"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Year" />
          <input
            onChange={handelChange}
            value={movie.Year}
            type="text"
            className="form-control"
            id="Year"
            placeholder="Year"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddMovie
