import '../styles/page-styles/Resume.css'
export default function Resume(){

    return (

        <section id="resume-parent-section">
            <div className="resume-inner-container">
                

                {/* <p>Download my <a download id="resume-a-tag" href={downloadUrl} onClick={downloadResume}>resume</a></p> */}
                <div>
                <h1 id="resume-section-title">Resume</h1>
                <p className="resume-p">Download my <a href="assets/pdfs/resume-gabriel-morrow-2.pdf" download={"Gabriel_Morrow_Resume.pdf"} id="resume-a-tag" >resume</a></p>

                <p className="resume-p">Front-end Proficiencies</p>
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
                <p className="resume-p">Back-end Proficiencies</p>
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