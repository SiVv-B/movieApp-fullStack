import React from 'react'

function MovieCard({ x }) {
  return (
    <div>
<div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" src={x.poster} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{x.title}</h5>
    <p className="card-text">{x.description}</p>
  </div>
</div>

    </div>
  )
}


export default MovieCard
