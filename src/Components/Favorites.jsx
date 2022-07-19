// const Favorites = () => {
//     return(
//         <div>
//             <h1>Soy favorites</h1>
//         </div>
//     )
// }
// export default Favorites;
import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.moviesFavourites.map((element)=>{
            return(

              <div key={element.id}>
                <Link to={`/movie/${element.id}`}>
                 <h2>{element.title}</h2>
                </Link>   
                <button onClick={() => this.props.removeMovieFavorite(element.id)}>X</button>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}
function mapToStateProps(state){
  return {
    moviesFavourites:state.moviesFavourites,
  }
}
function mapDispatchToProps(dispatch){
  return {
    removeMovieFavorite:element=>dispatch(removeMovieFavorite(element)),
  }
}
export default connect(mapToStateProps,mapDispatchToProps)(ConnectedList);