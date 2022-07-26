import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'
import { addMovieFavorite } from '../Redux/Actions';
import Style from '../Styles/Inicio.module.css'
import { useDispatch } from 'react-redux';
const Inicio = ( )=> {
    const state = useSelector(state => state.moviesLoaded)
    const estadoGeneral = useSelector(state=>state);
    const dispatch = useDispatch();
    console.log(state.moviesLoaded);
    return(
        <div className={Style.contenedor}>
            {state.map((movie)=>{
           return(
            <div key={movie.imdbID} className= {Style.card} >
                    <NavLink to={`/movie/${movie.imdbID}`}><div className={Style.cardInfo} style={{backgroundImage:`url(${movie.Poster})`}}>
                        <h2 className={Style.title}>More Information</h2>
                    </div>
                    </NavLink>
            <div className={Style.titleFav}>
              <NavLink to={`/movie/${movie.imdbID}`} className={Style.text}> <h3>{movie.Title}</h3> </NavLink> 
              <button onClick={() => dispatch(addMovieFavorite({title:movie.Title, id:movie.imdbID, poster:movie.Poster}))  }>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="12" y1="9" x2="12" y2="15" />
                </svg>  
              </button>
            </div>  
                    
                    {/* <h2 className={Style.text}>{movie.Title}</h2> */}
                    
              {/* <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button> */}
            </div>
           )
          
          
         })}
        </div>
    )
}
export default Inicio;