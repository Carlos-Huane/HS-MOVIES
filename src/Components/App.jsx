import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import {Routes , Route ,Navigate} from 'react-router-dom'
import Inicio from './Inicio.jsx';
import Favorites from './Favorites.jsx';
import MovieDetail from './MovieDetail.jsx';
import AboutProyect from './AboutProyect.jsx';
import {useParams} from 'react-router-dom';
import Style from '../Styles/App.module.css'
function App() {
  const rutas = useParams();

  return (
    <div className = {Style.app}>
      <Header />
      <Routes>
        <Route path = '/' element = {<Navigate to='/HS-MOVIES/home' />} />
        <Route path = '/HS-MOVIES' element = {<Navigate to='/HS-MOVIES/home' />} />
        <Route path = '/HS-MOVIES/home' element = {<Home />} />
        <Route path = '/HS-MOVIES/inicio' element = {<Inicio />} />
        <Route path = '/HS-MOVIES/favorites' element = {<Favorites />} />
        <Route path = '/HS-MOVIES/about-proyect' element = {<AboutProyect />} />
        <Route path = '/HS-MOVIES/movie/:movieDetail' element = {<MovieDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
