const MovieDetail = () => {
    return (
        <div>
            <h1>Soy Movie Detail</h1>
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