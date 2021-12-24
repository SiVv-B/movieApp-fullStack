import React from 'react'
import { getSingleMovie } from '../Redux/Actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function MovieCard({ x }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getOneMovie = () => {
    dispatch(getSingleMovie(x._id))
    navigate('/details')
    console.log(x._id,'id of one movie')
  }

  
  return (
    <div>
      <div className="card" style={{ width: '12%' }}>
        <img className="card-img-top" src={x.poster} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{x.title}</h5>
          <p className="card-text">{x.description}</p>
        </div>

        <Link to={`/details/${x._id}`}>
          <button className="btn btn-primary" onClick={getOneMovie}>
            Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard
