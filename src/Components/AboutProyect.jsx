import Style from "../Styles/AboutProyect.module.css"
const AboutProyect = () => {
    return (
        <div className = {Style.AboutProyect}>
            <h1>Este proyecto fue realizado en un 100% por Carlos Huane, se aplicó varios conceptos de React como la implementación de hooks, la obtención de los datos por parte de una api pública con fetch,la lógica de todo el estructurado,así como la estructuración de este a trávez de modulos.Además se uso React-Redux con el objetivo de organizar mucho mejor el código,conseguí 
                realizar que la página sea SPA (single page application) a trávez de rutas que proporcionar REACT-ROUTER-DOM, para el css utilizé css modules, bootstrap y universe.io para el diseño de las cards y css animado.
            </h1>
            <em><h4>"Pregúntate si lo que estas haciendo hoy te acerca al lugar en el que quieres estar mañana"</h4></em>
            <em><h4>-Walt Disney</h4></em>
        </div>
    )
}
export default AboutProyect;