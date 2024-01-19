export function InformationalText(props){

    return (

        <div className='grid-element text' onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave}>
            <h1>{props.element[1]}</h1>
            <p>{props.element[2]}</p>
            <a href={props.element[3]} target="_blank">Deployed Application</a>
            <a href={props.element[4]} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
    )
}