import '../styles/component-styles/Project.css';
import { useNavigate } from 'react-router-dom';
import React, { useState} from 'react';
import {BackgroundImage} from './BackgroundImage.jsx'
import {InformationalText} from './InformationalText.jsx'

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
        <div className="project-container">
        <div className="project">
            <BackgroundImage element={props.element} isHovered={isHovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            {isHovered ? (<InformationalText element={props.element} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />) : null}
        </div>
        </div>
    )
}



