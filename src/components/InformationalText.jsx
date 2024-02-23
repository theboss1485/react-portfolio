import '../styles/component-styles/InformationalText.css';
import React, { useState } from 'react';

// This function displays the links, technologies, and title of each project in the portfolio.
export function InformationalText(props){

    const [deployed, setDeployed] = useState(true);

    if((props.element[3] === "This isn't a deployed application.") && (deployed === true)){

        setDeployed(false);
    }



    return (

        <div className='grid-element text-section' onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave}>
            <h1>{props.element[1]}</h1>
            <p className='text-element'>{props.element[2]}</p>
            
            {deployed ? (

                <a href={props.element[3]} target='_blank' className='text-element'>Deployed Application</a>

            ) : (

                <p>{props.element[3]}</p>
            )}
            
            <a href={props.element[4]} target='_blank' className='text-element'>GitHub Repository</a>
        </div>
    )
}