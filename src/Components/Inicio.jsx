import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'
import Style from '../Styles/Inicio.module.css'
const Inicio = ( )=> {
    const state = useSelector(state => state.moviesLoaded)
    console.log(state.moviesLoaded);
    return(
        <div className={Style.contenedor}>
            {state.map((movie)=>{
           return(
            <div key={movie.imdbID} className= {Style.card}>
                    <div className={Style.cardInfo}>
                        <p className={Style.title}>{movie.Title}</p>
                    </div>
              {/* <NavLink to={`/movie/${movie.imdbID}`}> <h3>{movie.Title}</h3> </NavLink> */}

              {/* <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button> */}
            </div>
           )
          
          
         })}
        </div>
    )
}
export default Inicio;