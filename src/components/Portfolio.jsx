import '../styles/Portfolio.css'
import {portfolio} from '../assets/portfolio.js'
import {Project} from './Project.jsx'
export default function Portfolio(){

    return (
        <section>
        <h1>Portfolio</h1>
        <div id="portfolio" className="portfolio">
            {portfolio.map((element, index) => {
                
                return <Project key={index} element={element}/>
            
            })}
        </div>
        </section>
    )
}