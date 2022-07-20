import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Style from '../Styles/Header.module.css'

import {useDispatch, useSelector} from 'react-redux'
import {getMovies} from '../Redux/Actions';

const Header = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const estado = useSelector(state => state)
    

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input);
    }
    const handleSubmit = (e) => {
        console.log("el estado:",estado);
        e.preventDefault();
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <NavLink to='/home'><a class="navbar-brand" href="#">HS MOVIES</a></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to = '/home'><a class="nav-link" aria-current="page">Home</a></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to = '/inicio'><a class="nav-link">Inicio</a></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to = '/favorites'><a class="nav-link" href="#">Favorites</a></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to = '/about-proyect'><a class="nav-link">About Proyect</a></NavLink>
                        </li>
                    </ul>






                    <form class="d-flex" role="search" onSubmit={e => handleSubmit(e)}>
                        {/* <input type="text" name="text" className={Style.input} aria-label="Search" placeholder="Search...." /> */}

                        <input 
                            placeholder="Type here" 
                            className={Style.input} 
                            name="text" 
                            type="text" 
                            onChange={element => handleChange(element)}  
                            value = {input}                       
                        />

                        {/* <button class="btn btn-outline-light" type="submit">Search Movie </button> */}
                                {/* <button data-text="Awesome" class="button">
                                    <span class="actual-text">&nbsp;Search&nbsp;</span>
                                    <span class="hover-text" aria-hidden="true">&nbsp;Search&nbsp;</span>
                                </button> */}


                        <button type="submit" onClick={ () => dispatch(getMovies(input))}>
                       
                            <div className={Style.button}>
                                <div className={Style.box}>S</div>
                                <div className={Style.box}>E</div>
                                <div className={Style.box}>A</div>
                                <div className={Style.box}>R</div>
                                <div className={Style.box}>C</div>
                                <div className={Style.box}>H</div>
                            </div>
                        </button>
                    </form>
                    </div>
                </div>
                </nav>
        
        </>
    )
}

export default Header;