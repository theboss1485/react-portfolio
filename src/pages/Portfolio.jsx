import '../styles/page-styles/Portfolio.css'
import {portfolio} from '../assets/portfolio.js'
import {Project} from '../components/Project.jsx'

// This function displays the Portfolio page.
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