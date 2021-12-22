import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="container"
    style = {{alignContent:'center'}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to ='/' className="nav-link">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/movieList'className="nav-link" href="#">
                Movie List
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/addMovie' className="nav-link" href="#">
                Add a movie
              </Link>
            </li>
          </ul>

         
        </div>
      </nav>
    </div>
  )
}

export default NavBar
