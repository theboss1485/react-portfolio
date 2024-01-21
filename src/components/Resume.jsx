import '../styles/Resume.css'
export default function Resume(){

    return (

        <section id="resume-parent-section">
            <div className="resume-inner-container">
                

                {/* <p>Download my <a download id="resume-a-tag" href={downloadUrl} onClick={downloadResume}>resume</a></p> */}
                <div>
                <h1 id="resume-section-title">Resume</h1>
                <p>Download my <a href="../../src/assets/pdfs/resume-gabriel-morrow-2.pdf" download={"Gabriel_Morrow_Resume.pdf"} id="resume-a-tag" >resume</a></p>

                <p>Front-end Proficiencies</p>
                    <ul className="proficiencies">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>HTML</li>
                        <li>HTML</li>
                    </ul>
                <p>Back-end Proficiencies</p>
                    <ul className="proficiencies">
                        <li>APIs</li>
                        <li>Node Js</li>
                        <li>Express</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div> 
        </section>
    )
}