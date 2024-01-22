import '../styles/page-styles/AboutMe.css'

// This function displays the About Me page.
export default function AboutMe(){

    return (

        <section id="about-me-content-section">
            <div>
                <h1>About Me</h1>
            </div>
            <div>
                <img src='assets/images/gabriel-morrow.png' alt="a picture of Gabriel's face"/>
            </div>
            <div>
                <p id="about-me-paragraph">I am a graduate of Liberty University Online with a degree in Information Technology: Application and Database Development. 
                    I live in Ohio in the USA with my family. I am the oldest of three siblings and have one brother and one sister. 
                    I am preparing to get a software development job by going to the OSU Web Development bootcamp.
                    I enjoy playing video games, spending time with my family, and taking walks outside. 
                    After I acquire a higher-paying job, I would like to move into my own house, get married, and start a family.</p>
            </div>
        </section>
    )
}