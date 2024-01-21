import '../styles/Navigation.css'
import { useState } from 'react'

export default function Navigation({buttonClicked}){

    const [selectedItem, setSelectedItem] = useState("about-me")

    function handleNavClick(event){

        if (event.target.id === "about-me-list-item"){

            setSelectedItem("about-me");
            buttonClicked("about-me");
            

        } else if (event.target.id === "portfolio-list-item"){

            setSelectedItem("portfolio");
            buttonClicked("portfolio");

        } else if (event.target.id === "contact-list-item"){

            setSelectedItem("contact");
            buttonClicked("contact");

        } else if (event.target.id === "resume-list-item"){

            setSelectedItem("resume");
            buttonClicked("resume");
        } 
    }

    return (

    <nav>
        <ul className="navigation-list">
            <li id="about-me-list-item" 
                className={`${selectedItem === "about-me" ? "active-item" : "inactive-item"}`}
                onClick={handleNavClick}>About Me
            </li>
            <li id="portfolio-list-item" 
                className={`${selectedItem === "portfolio" ? "active-item" : "inactive-item"}`}
                onClick={handleNavClick}>Portfolio
            </li>
            <li id="contact-list-item"
                className={`${selectedItem === "contact" ? "active-item" : "inactive-item"}`}
                onClick={handleNavClick}>Contact
            </li>
            <li id="resume-list-item"
                className={`${selectedItem === "resume" ? "active-item" : "inactive-item"}`}
                onClick={handleNavClick}>Resume
            </li>
        </ul>
    </nav>
    );
}