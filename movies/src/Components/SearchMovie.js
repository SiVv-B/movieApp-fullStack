import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function SearchMovie() {
  const [caracter, setCaracter] = useState('')
  const handelChange = (event) => {
    setCaracter(event.target.value)
  }

  const listOfMovies = useSelector((state) => state.movies)

  const onSubmit = (event) => {
    event.preventDefault()
  }
  const searchedElements = listOfMovies.filter((elementMovie) =>
  elementMovie.title.toLowerCase().includes(caracter.toLowerCase()))
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="search" />
        <input
          onChange={handelChange}
          value={caracter}
          id="search"
          type="text"
          className="form-control"
          placeholder="search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search Movie
        </button>
      </form>


      {/* the code of the display of the searched movie: */}
      <div className="container" style={{ display: 'flex' ,flexDirection:'row'}}>
        { (caracter=='') ? '' :
        searchedElements.map((element) => (
          <div
            className="card-body"
            style={{ display: 'flex', flexDirection: 'column', width: '20%' }}
          >
            <h5 className="card-title">{element.title}</h5>
            <img
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderStyle: 'solid',
                borderColor: 'red',
              }}
              className="card-img-top"
              src={element.poster}
              alt="Card image cap"
            />
            <p className="card-text">{element.description}</p>

            <Link to={`movie/details/${element._id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        ))
      
      }


      </div>
    </div>
  )
}

export default SearchMovie
