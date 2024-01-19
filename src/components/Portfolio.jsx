import '../styles/Portfolio.css'
import {portfolio} from '../assets/portfolio.js'
import {Project} from './Project.jsx'
export default function Portfolio(){

    return (

        <section>
            {console.log(portfolio)}
            {portfolio.map((element, index) => {
                
                return <Project key={index} element={element}/>
            
            })}
        </section>
    )
}