import '../styles/Resume.css'
export default function Resume(){

    const downloadUrl = "https://docs.google.com/document/d/10lRsQjANbc01zEqJJWgeTSeUTrA8-TVq/edit?usp=sharing&ouid=116138192011454161317&rtpof=true&sd=true"

    const downloadResume = (event) => {
        event.preventDefault()
        console.log("test!!!");
        event.target.href = downloadUrl;
        event.target.download = "Gabriel_Morrow_Resume.pdf"
        event.target.click()
    }

    return (

        <section id="resume-parent-section">
            <h1 id="resume-section-title">Resume</h1>

            {/* <p>Download my <a download id="resume-a-tag" href={downloadUrl} onClick={downloadResume}>resume</a></p> */}
            <p>Download my <a download={"Gabriel_Morrow_Resume.pdf"} id="resume-a-tag" onClick={downloadResume}>resume</a></p>
            
            <section>
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
            </section>
            <section>
                <p>Back-end Proficiencies</p>
                <ul className="proficiencies">
                    <li>APIs</li>
                    <li>Node Js</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                </ul>
            </section>  
        </section>
    )
}