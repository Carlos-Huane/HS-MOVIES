import { GET_MOVIES } from "./ActionTypes.js";

const apiKey = "a77f0041";

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=a77f0041&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }