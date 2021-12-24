import React, { useState } from 'react'
import { newMovie } from '../Redux/Actions'
import { useDispatch } from 'react-redux'
import NavBar from './NavBar'

function AddMovie() {
  const [movie, setMovie] = useState({addedID:'', title: ' ', poster: ' ', year: '', description:'',details:'', trailer:''})
  const dispatch = useDispatch()
  const handelChange = (event) => {
    setMovie({ ...movie, [event.target.id]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(newMovie(movie))
    setMovie({ addedID:'', title: ' ', poster: ' ', year: '', description:'',details:'', trailer:''})
  }

  return (
    <div>
       <NavBar/>
      <form onSubmit={onSubmit}>
      <div className="form-group">
          <label htmlFor="addedID" />
          <input
            onChange={handelChange}
            value={movie.addedID}
            type="number"
            className="form-control"
            id="addedID"
            placeholder="addedID"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title" />
          <input
            onChange={handelChange}
            value={movie.title}
            type="text"
            className="form-control"
            id="title"
            placeholder="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="poster" />
          <input
            onChange={handelChange}
            value={movie.poster}
            type="text"
            className="form-control"
            id="poster"
            placeholder="poster URL"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="year" />
          <input
            onChange={handelChange}
            value={movie.year}
            type="text"
            className="form-control"
            id="year"
            placeholder="Year"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" />
          <input
            onChange={handelChange}
            value={movie.description}
            type="text"
            className="form-control"
            id="description"
            placeholder="description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="details" />
          <input
            onChange={handelChange}
            value={movie.details}
            type="text"
            className="form-control"
            id="details"
            placeholder="details"
          />
        </div>

        <div className="form-group">
          <label htmlFor="trailer" />
          <input
            onChange={handelChange}
            value={movie.trailer}
            type="text"
            className="form-control"
            id="trailer"
            placeholder="trailer"
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
