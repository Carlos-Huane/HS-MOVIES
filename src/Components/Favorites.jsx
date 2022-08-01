import {removeMovieFavorite} from "../Redux/Actions.js"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Style from "../Styles/Favorites.module.css"
 const Favorites = () => {
    const moviesFavourites = useSelector(state => state.moviesFavourites);
    const dispatch = useDispatch();
     return(
         <div className= {Style.favorites}> 
            <div className={Style.contenedor}>
                {!moviesFavourites.length && 
                    <div className = {Style.default}>
                        <h1 className= {Style.defaultText}>Does not have any favorite movies added</h1>
                        <div className= {Style.loader}></div>
                    </div>
                }
                {moviesFavourites.map(e => {
                    return (
                        <div className={Style.contenedorCard} key={e.id}>
                            <div className={Style.text}> 
                                <NavLink to={`/HS-MOVIES/movie/${e.id}`}><h2 style={{writingMode:"vertical-rl"}}>{e.title}</h2> </NavLink>
                                <button onClick = {() => dispatch(removeMovieFavorite(e.id))}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <rect x="4" y="4" width="16" height="16" rx="2" />
                                        <path d="M10 10l4 4m0 -4l-4 4" />
                                    </svg>
                                </button>
                            </div>
                            <NavLink to={`/HS-MOVIES/movie/${e.id}`}><div  className={Style.card}   style={{backgroundImage:`url(${e.poster})`}}> </div> </NavLink> 
                                
                            
                        </div>
                    )
                })}
            </div>
         </div>
     )
 }
 export default Favorites;
