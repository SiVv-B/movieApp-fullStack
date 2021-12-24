import React from 'react'
import NavBar from './NavBar'
import SearchMovie from './SearchMovie'

function HomePage() {
  return (
    <div>
      <h1>Welcome to the movie app</h1>
      <div className="container" style={{ display: 'flex',flexDirection:'row',marginLeft:'30%' }}>
        <div
          style={{
            display: 'flex',
            width: '30%',
          }}
        >
          <NavBar />
        </div>

        <SearchMovie />
      </div>

      <img
        className="card-img-top"
        src="https://s2.qwant.com/thumbr/700x0/c/3/12332b6a390ca2522d93fe3240454ad81cad64668fe5fcf7e2cc3ef0d32c28/shutterstock_644371840.jpg?u=https%3A%2F%2Fwww.cinevorax.fr%2Fwp-content%2Fuploads%2F2020%2F05%2Fshutterstock_644371840.jpg&q=0&b=1&p=0&a=0
          "
        alt="home page picture"
      />
    </div>
  )
}

export default HomePage
