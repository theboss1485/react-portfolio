import '../styles/component-styles/Project.css';
import { useNavigate } from 'react-router-dom';
import React, { useState} from 'react';
import {BackgroundImage} from './BackgroundImage.jsx'
import {InformationalText} from './InformationalText.jsx'

// This function displays each project on the portfolio page.
export function Project(props){

    const [isHovered, setIsHovered] = useState(false);
    const history = useNavigate()

    const handleMouseEnter = () => {

        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {

        setIsHovered(false);
      };

    return (
        
        <div className="project-container-outer">
            <div className="project-container-inner">
                <BackgroundImage element={props.element} isHovered={isHovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
                {isHovered ? (<InformationalText element={props.element} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />) : null}
            </div>
        </div>
    )
}



