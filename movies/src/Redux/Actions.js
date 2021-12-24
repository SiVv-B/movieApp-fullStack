import axios from 'axios'
import { useDispatch } from 'react-redux'


//Get all movies
export const GETAllMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('/movie')
    dispatch({ type: 'GET_ALL_MOVIES', payload: response.data.movies })
  } catch (error) {
    console.log('error')
    console.log(error)
    dispatch({ type: 'GET_MOVIES_FAIL', payload: error })
  }
}

//Get one movie by id (id added by the server)

export const getSingleMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/movie/${id}`)
    dispatch({ type: 'SINGLE_MOVIE', payload: response.data.movie })
  } catch (error) {
    console.log(error)
  }
}

//Add a new movie
export const newMovie = (movie) => async (dispatch) => {
  try {
    const response = await axios.post('/movie', movie)
    dispatch({ type: 'ADD_MOVIE', payload: movie })
  } catch (error) {
    console.log(error)
  }
}


//Edit a movie's details
export const editMovie = (id, movie) => async (dispatch) => {
  try {
    const response = await axios.put(`/movie/update/${id}`, movie);
    console.log(response.data.movie)
     dispatch(GETAllMovies()) 
    dispatch({type:'EDIT_MOVIE',payload:response.data.movie})
  } catch (error) {
    console.log(error);
  }
}