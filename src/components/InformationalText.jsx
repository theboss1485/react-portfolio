import '../styles/component-styles/InformationalText.css';

// This function displays the links, technologies, and title of each project in the portfolio.
export function InformationalText(props){

    return (

        <div className='grid-element text-section' onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave}>
            <h1>{props.element[1]}</h1>
            <p className='text-element'>{props.element[2]}</p>
            <a href={props.element[3]} target='_blank' className='text-element'>Deployed Application</a>
            <a href={props.element[4]} target='_blank' className='text-element'>GitHub Repository</a>
        </div>
    )
}