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
            <div key={movie.imdbID} className= {Style.card} >
                    <div className={Style.cardInfo} style={{backgroundImage:`url(${movie.Poster})`}}>
                        <h2 className={Style.title}>More Information</h2>
                    </div>
              <NavLink to={`/movie/${movie.imdbID}`} className={Style.text}> <h3>{movie.Title}</h3> </NavLink> 
                    
                    {/* <h2 className={Style.text}>{movie.Title}</h2> */}
                    
              {/* <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button> */}
            </div>
           )
          
          
         })}
        </div>
    )
}
export default Inicio;