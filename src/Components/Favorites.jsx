 import { useSelector } from "react-redux";
import Style from "../Styles/Favorites.module.css"
 const Favorites = () => {
    const moviesFavourites = useSelector(state => state.moviesFavourites);
     return(
         <div>
             <h1>MY FAVORITES MOVIES</h1>

             {moviesFavourites.map(e => {
                return (
                    <div className={Style.contenedorCard}>
                        <div className="text"> 
                            <h2 style={{writingMode:"vertical-rl"}}>{e.title}</h2>
                            <button>X</button>
                        </div>
                        <div  className={Style.card} key={e.id}  style={{backgroundImage:`url(${e.poster})`}}> 
                            
                        </div>
                    </div>
                )
             })}
         </div>
     )
 }
 export default Favorites;
