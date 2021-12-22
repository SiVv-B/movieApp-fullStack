const initilState = { movies: [], newMovie: {}, errors: null, loading: false }
const Reducer = (state = initilState, action) => {
  switch (action.type) {
    case 'GET_ALL_MOVIES':
      return { ...state, movies: action.payload, loading: false }

    case 'GET_MOVIES_FAIL':
      return { ...state, errors: action.payload }

    case 'ADD_MOVIE':
      return { ...state, newMovie: action.payload }


    default:
      return state
  }
}
export default Reducer
