import axios from "axios"
import { useDispatch } from "react-redux";





//Get all movies

/* export const GETAllMovies = () => async (dispatch) => {
    try {
      const response = await axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/db");
      
      dispatch({ type: 'GET_ALL_MOVIES', payload: response.data.movies });
    } catch (error) {
      
      dispatch({type:'GET_MOVIES_FAIL',payload:error})
    }
  };

  
 */
  export const GETAllMovies = () => async (dispatch) => {
    try {
      console.log('hello')
      const response = await axios.get("/movie")
      dispatch({ type: 'GET_ALL_MOVIES', payload: response.data.movies })
      console.log(response)
    } catch (error) {
      console.log("error")
      console.log(error)
      dispatch({type:'GET_MOVIES_FAIL',payload:error})

    }
  }


//Add a new movie

  export const newMovie =(movie)=>{
    return {
        type:'ADD_MOVIE',
        payload:movie
    }
}
/* 
export const newMovie = (movie) => async (dispatch) => {
  try {
    const response = await axios.post("/movie", movie)
    dispatch({ type: 'ADD_MOVIE', payload: movie })
    console.log(movie)
  } catch (error) {
    console.log(error);
  }
} */


//Get one movie
/* 
export const getSingleMovie=(id)=>async(dispatch)=>{
  try {
   const response= await axios.get(`/movie/${id}`)
   console.log(response)
   dispatch({type:'Single',payload:response.movies});
   
  } catch (error) {
    console.log(error)
  }
} */




