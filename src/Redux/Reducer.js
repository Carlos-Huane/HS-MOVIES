import {ADD_MOVIE_FAVORITE} from './ActionTypes.js';
import {GET_MOVIES} from './ActionTypes.js';
import {REMOVE_MOVIE_FAVORITE} from './ActionTypes.js';
import {GET_MOVIE_DETAIL} from './ActionTypes.js';

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        let hash = {};
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload).filter(o => hash[o.id] ? false : hash[o.id] = true)
        }
    }
    if (action.type === GET_MOVIES) {
        if(action.payload.Response==='True') {
          return {
            ...state,
            moviesLoaded: action.payload.Search
          };
        } else {
          alert("FILM NOT FOUND")
        }
        
    }
    
    if (action.type === REMOVE_MOVIE_FAVORITE){
      return{
        ...state,
        moviesFavourites: state.moviesFavourites.filter(elementos=>elementos.id!==action.payload)
      }
    }

    if(action.type === GET_MOVIE_DETAIL){
      
      return{
        ...state,
        movieDetail:action.payload,
      }
    }
    return state;
  }
  
  export default rootReducer;