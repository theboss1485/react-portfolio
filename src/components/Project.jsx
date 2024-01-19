import '../styles/Project.css';
import { useNavigate } from 'react-router-dom';
import React, { useState} from 'react';
import {BackgroundImage} from './BackgroundImage.jsx'
import {InformationalText} from './InformationalText.jsx'

export function Project(props){

    console.log("Props: ", props);
    

    const [isHovered, setIsHovered] = useState(false);
    const history = useNavigate()
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    return (
        <section className="parent">
            <BackgroundImage element={props.element} isHovered={isHovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}></BackgroundImage>
            {isHovered ? (<InformationalText element={props.element} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}></InformationalText>) : null}
        </section>
    )
}



