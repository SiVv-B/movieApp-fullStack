const initilState = { movies: [], newMovie: {}, oneMovie:{}, editMovie:{}, errors: null, loading: false }
const Reducer = (state = initilState, action) => {
  switch (action.type) {
    case 'GET_ALL_MOVIES':
      return { ...state, movies: action.payload, loading: false }

    case 'GET_MOVIES_FAIL':
      return { ...state, errors: action.payload }
    case 'ADD_MOVIE':
      return { ...state, newMovie: action.payload }
      case 'SINGLE_MOVIE':
        return {...state, oneMovie: action.payload}
        case 'EDIT_MOVIE' :
          return {...state,editMovie:action.payload} 


    default:
      return state
  }
}
export default Reducer
