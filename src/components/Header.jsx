import '../styles/component-styles/Header.css'
import Navigation from './Navigation.jsx'

// This function displays the header on each page in the portfolio.
export default function Header({navButtonClicked}){

    function handleNavButtonClick(section){

        navButtonClicked(section)
    }

    return (

        <header>
            <h1>Gabriel Morrow</h1>
            <Navigation buttonClicked={handleNavButtonClick}/>
        </header>
    );
}