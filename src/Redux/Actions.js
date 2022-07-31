import { GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE, ADD_MOVIE_FAVORITE } from "./ActionTypes.js";

 const API="41bb3635";
export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
} 

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${API}&s=` + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        })};
  }

  export function getMovieDetail(id){
    
    return function(dispatch){
      return fetch(`http://www.omdbapi.com/?apikey=${API}&i=`+id)
        .then(response => response.json())
        .then(json => {
          dispatch({type: GET_MOVIE_DETAIL, payload:json})
        });
    };
  }
  export function removeMovieFavorite(id){
    return { type: REMOVE_MOVIE_FAVORITE, payload:id}
  }
