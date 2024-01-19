import '../styles/Navigation.css'
import { useState } from 'react'

export default function Navigation({buttonClicked}){

    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showResume, setShowResume] = useState(false);

    function handleNavClick(event){

        if (event.target.id === "about-me-list-item"){

            setShowAboutMe(true);
            buttonClicked("about-me");

        } else if (event.target.id === "portfolio-list-item"){

            setShowPortfolio(true);
            buttonClicked("portfolio");


        } else if (event.target.id === "contact-list-item"){

            setShowContact(true);
            buttonClicked("contact");

        } else if (event.target.id === "resume-list-item"){

            setShowResume(true);
            buttonClicked("resume");
        } 
    }

    return (

    <nav>
        <ul>
            <li id="about-me-list-item" onClick={handleNavClick}>About Me</li>
            <li id="portfolio-list-item" onClick={handleNavClick}>Portfolio</li>
            <li id="contact-list-item" onClick={handleNavClick}>Contact</li>
            <li id="resume-list-item" onClick={handleNavClick}>Resume</li>
        </ul>
    </nav>
    );
}