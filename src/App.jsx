
// This overarching file contains JavaScript to display the various components of the application.
import { useState } from 'react'
import { useLocation, Outlet } from 'react-router-dom';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import './styles/App.css'



function App() {

    const location = useLocation();
    const currentPath = location.pathname;

    let pages = [

        { name: 'about-me', path: '/' },
        { name: 'portfolio', path: '/portfolio' },
        { name: 'contact', path: '/contact' },
        { name: 'resume', path: '/resume' },
    ]

    const activePage = pages.find((page) => page.path === currentPath);

    const [activeSection, setActiveSection] = useState(activePage.name);

    function changeActiveSection(section){

        setActiveSection(section)
        
    }
    
    return (
        
        <section>
            <Header navButtonClicked={changeActiveSection} />
            <Outlet />
            <Footer />
        </section>
    )
}

export default App