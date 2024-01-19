
import { useEffect } from 'react';
import { useState } from 'react'

import AboutMe from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import './styles/App.css'
import Header from './components/Header.jsx'

function App() {

    const [activeSection, setActiveSection] = useState("about-me");

    function changeActiveSection(section){

        setActiveSection(section)
        
    }

    useEffect(() => {

        alert(`section ${activeSection} clicked`);

    }, [activeSection])
    
    return (
        <section>
            <Header navButtonClicked={changeActiveSection}/>
            {activeSection === "about-me" && <AboutMe />}
            {activeSection === "portfolio" && <Portfolio />}
            {activeSection === "contact" && <Contact />}
            {activeSection === "resume" && <Resume />}
        </section>
    )
}

export default App

    // <>
    //   <section>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </section>
    //   <h1>Vite + React</h1>
    //   <section className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </section>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
