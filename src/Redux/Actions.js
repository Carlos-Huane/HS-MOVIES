import { GET_MOVIES } from "./ActionTypes.js";

const apiKey = "a77f0041";
export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
} 

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=a77f0041&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }

  export function getMovieDetail(id){
    
    return function(dispatch){
      return fetch("http://www.omdbapi.com/?apikey=a77f0041&i="+id)
        .then(response => response.json())
        .then(json => {
          dispatch({type: "GET_MOVIE_DETAIL" , payload:json})
        });
    };
  }
  export function removeMovieFavorite(id){
    return { type: "REMOVE_MOVIE_FAVORITE", payload:id}
  }
