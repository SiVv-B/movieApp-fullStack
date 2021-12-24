import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleMovie,editMovie } from '../Redux/Actions'
import ReactPlayer from 'react-player/youtube'
import NavBar from './NavBar'

function MovieDetails() {
  const [updateMovie, setUpdateMovie] = useState({ addedID:'', title: ' ', poster: ' ', year: '', description:'',details:'', trailer:''})
  const [show, setShow] = useState(false)


  const dispatch = useDispatch()
  const oneMovie = useSelector((state) => state.oneMovie)
  const { id } = useParams()

//---------------------------------------------------------------- this code is for getting one single movie:
  useEffect(() => {
    dispatch(getSingleMovie(id))
  }, [])
  //si oneMovie n'existe pas dans reducer, return loading (pske ça demande du temps pour le trouver)
  //
  if (!oneMovie) {
    return 'loading'
  }
  //autre methode:
  //{oneMovie &&oneMovie.title}
  //autre methode avec else
  //{oneMovie ? onMovie.title :'waiting}
  //--> cette methode peut etre definie comme "await" car le store prend du temps pour charger le payload et pour que le reducer lise le payload et change le state


  //---------------------------------------------------------------- this code is for editting a movie:

  const handleEdit = (event) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  
  const handelEditChange= event =>{
    setUpdateMovie({ ...updateMovie, [event.target.id]: event.target.value });
}

const editSubmit = (event) => {
  event.preventDefault();
  dispatch(editMovie(oneMovie._id, updateMovie))
  setUpdateMovie({ addedID:'', title: ' ', poster: ' ', year: '', description:'',details:'', trailer:''})
  setShow(false) 
}

  return (
    <div>
      <NavBar />
      <h4>Details about the movie {oneMovie.title}</h4>
      {/* this section is for getting one signle movie */}
      <div style={{ display: 'flex' }}>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title"> Title: {oneMovie.title}</h5>
            <img
              className="card-img-top"
              src={oneMovie.poster}
              alt="Card image cap"
            />
            <p className="card-text"> Description :{oneMovie.description}</p>
            <p className="card-text"> Details :{oneMovie.details}</p>
          <button  onClick={handleEdit}>Edit the movie's details</button>
          </div>
        </div>
        <ReactPlayer url={oneMovie.trailer} />
      </div>

      {/* this section is for editting a movie */}
<div>
{show ? (
<form onSubmit={editSubmit}>
      <div className="form-group">
          <label htmlFor="addedID" />
          <input
            onChange={handelEditChange}
            value={updateMovie.addedID}
            type="number"
            className="form-control"
            id="addedID"
            placeholder="addedID"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title" />
          <input
            onChange={handelEditChange}
            value={updateMovie.title}
            type="text"
            className="form-control"
            id="title"
            placeholder="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="poster" />
          <input
            onChange={handelEditChange}
            value={updateMovie.poster}
            type="text"
            className="form-control"
            id="poster"
            placeholder="poster URL"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="year" />
          <input
            onChange={handelEditChange}
            value={updateMovie.year}
            type="text"
            className="form-control"
            id="year"
            placeholder="Year"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" />
          <input
            onChange={handelEditChange}
            value={updateMovie.description}
            type="text"
            className="form-control"
            id="description"
            placeholder="description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="details" />
          <input
            onChange={handelEditChange}
            value={updateMovie.details}
            type="text"
            className="form-control"
            id="details"
            placeholder="details"
          />
        </div>

        <div className="form-group">
          <label htmlFor="trailer" />
          <input
            onChange={handelEditChange}
            value={updateMovie.trailer}
            type="text"
            className="form-control"
            id="trailer"
            placeholder="trailer"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
         ) : null}
</div>

    </div>
  )
}

export default MovieDetails
