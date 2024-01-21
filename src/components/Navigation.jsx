import '../styles/component-styles/Navigation.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

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
            <Link to="/" id="about-me-list-item" 
                className={`${selectedItem === "about-me" ? "active-item" : "inactive-item"}`}
                onClick={handleNavClick}>About Me
            </Link>
            <Link to="/portfolio" id="portfolio-list-item" 
                className={`${selectedItem === "portfolio" ? "active-item" : "inactive-item"}`}
                onClick={handleNavClick}>Portfolio
            </Link>
            <Link to="/contact" id="contact-list-item"
                className={`${selectedItem === "contact" ? "active-item" : "inactive-item"}`}
                onClick={handleNavClick}>Contact
            </Link>
            <Link to="/resume" id="resume-list-item"
                className={`${selectedItem === "resume" ? "active-item" : "inactive-item"}`}
                onClick={handleNavClick}>Resume
            </Link>
        </ul>
    </nav>
    );
}