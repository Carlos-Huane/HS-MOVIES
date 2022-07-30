import Style from "../Styles/AboutProyect.module.css"
const AboutProyect = () => {
    return (
        <div className = {Style.AboutProyect}>
            <div className= {Style.information}>
                <h1>This project was carried out 100% by Carlos Huane, several React concepts were applied such as the implementation of hooks, obtaining the data by a public api with fetch, the logic of the entire structure through modules.
    In addition, React-Redux was used in order to organize the code much better,
    I managed to make the page SPA (single page application) through routes provided by REACT-ROUTER-DOM, for the css
    I used css modules, bootstrap and universe.io for the design of the cards and animated css.
                </h1>
                <em><h4>"Ask yourself if what you are doing today is getting you closer to where you want to be tomorrow"</h4></em>
                <em><h4>-Walt Disney</h4></em>
            </div>
        </div>
    )
}
export default AboutProyect;