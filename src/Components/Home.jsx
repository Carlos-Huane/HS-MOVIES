import Style from '../Styles/Home.module.css'

const Home = () => {
    return (
        <div className = {Style.main}  >
            <div className={Style.contenedor}>
            <h1 className={Style.title}>HS MOVIES</h1>
            <h2 className='description'>
                <strong>"HS MOVIES" is the best movie and series search page, you can also see their specific details by clicking on them.</strong>
            </h2>
            <em style={{margin:"1.5rem"}}><h4> <strong>What are you waiting for to find your favorite movie / series? <span style={{color:"red"}}>❤</span></strong></h4></em> 
            <button className = {Style.button}>CLICK HERE!</button>
            </div>

        </div>
    )
}
export default Home;