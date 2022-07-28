import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {getMovieDetail} from "../Redux/Actions.js";
import { useDispatch, useSelector} from "react-redux/es/exports.js";
import Style from "../Styles/MovieDetail.module.css"

const MovieDetail = () => {
    const route = useParams();
    const dispatch = useDispatch();
    const stateMovie = useSelector(state => state.movieDetail)
    useEffect(()=>{
        dispatch(getMovieDetail(route.movieDetail));
    },[])
    return (
        <div>
            
            <div class="row" className = {Style.contenedor}>
                <div class="col-lg-6" className= {Style.poster}>
                    <img src={`${stateMovie.Poster}`} />
                </div>  
                <div class="col-lg-6" className = {Style.description}>
                    <h2>Year: {stateMovie.Year}</h2>
                    <h3>Director: {stateMovie.Director}</h3>
                    <h3>Actors: {stateMovie.Actors}</h3>
                    <h3>Genre: {stateMovie.Genre}</h3>
                    <h3>Lenguage: {stateMovie.Language}</h3>
                    <h3>Description: {stateMovie.Plot}</h3> 
                    <h3>Type: {stateMovie.Type}</h3>
                    <h3>Runtime: {stateMovie.Runtime}</h3>
                    <h3>Rating: {stateMovie.imdbRating}</h3> 
                </div> 
            </div>
        </div>
    )
}
export default MovieDetail;


// import React from 'react';
// import { connect } from 'react-redux';
// import { getMovieDetail } from '../../actions/index';

// import './Movie.css';

// export class Movie extends React.Component {

//     componentDidMount(){
//         this.props.getMovieDetail(this.props.match.params.id);
//         console.log(this.props.movieDetail);
//     }

//     render() {
        
//         return (
//             <div className="movie-detail">
//                 <h1> {this.props.movieDetail.Title} </h1>
//                 <h3> {this.props.movieDetail.Actors} </h3>
//                 <p>  {this.props.movieDetail.Plot} </p>
//                 <img src={this.props.movieDetail.Poster} alt="poster de la pelicula" />
//             </div>
//         );
//     }
// }

// function mapStateToProps(state){
//     return {
//         movieDetail: state.movieDetail,
//     }
// }

// export default connect(mapStateToProps,{getMovieDetail})(Movie);