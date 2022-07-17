import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import {Routes , Route ,Navigate} from 'react-router-dom'
import Inicio from './Inicio.jsx';
import Favorites from './Favorites.jsx';
import MovieDetail from './MovieDetail.jsx';
import AboutProyect from './AboutProyect.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = '/' element = {<Navigate to='/home' />} />
        <Route path = '/home' element = {<Home />} />
        <Route path = '/inicio' element = {<Inicio />} />
        <Route path = '/favorites' element = {<Favorites />} />
        <Route path = '/about-proyect' element = {<AboutProyect />} />
        <Route path = '/movie/:movieDetail' element = {<MovieDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
