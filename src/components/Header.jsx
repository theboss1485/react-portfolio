import '../styles/component-styles/Header.css'
import Navigation from './Navigation.jsx'

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