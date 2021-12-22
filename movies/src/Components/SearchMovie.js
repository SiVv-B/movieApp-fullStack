import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function SearchMovie() {
  const [search, setSearch] = useState({ Title: '' })
  const [caracter, setCaracter] = useState('')

  const handelChange = (event) => {
    setCaracter(event.target.value)
  }

  const listOfMovies = useSelector((state) => state.movies)

  const onSubmit = (event) => {
    event.preventDefault()
    const searchedElement = listOfMovies.find((elementMovie) =>
      elementMovie.Title.toLowerCase().includes(caracter.toLowerCase()),
    )

    setSearch({ ...search, searchedElement })
  }

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
      <div>
        {search.searchedElement ? (
          <div className="card" style={{ width: '18rem' }}>
            <img
              className="card-img-top"
              src={search.searchedElement.Poster}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{search.searchedElement.Title}</h5>
              <p className="card-text">{search.searchedElement.Year}</p>
              <a href="#" className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default SearchMovie
