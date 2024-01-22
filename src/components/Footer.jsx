import '../styles/component-styles/Footer.css'

/* This function displays the footer on each of the portfolio's pages.  The footer contains icons that link to 
my profiles on GitHub, LinkedIn, and Twitter, respectively*/
export default function Footer(){

    return (

        <footer>
            <a href="https://github.com/theboss1485">
                <img src="assets/images/github-icon.png" alt="GitHub Icon" className="footer-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/gabriel-morrow-837a7b19a/">
                <img src="assets/images/linkedin-icon.png" alt="LinkedIn Icon" className="footer-icon"/>
            </a>
            <a href="https://twitter.com/GMorrow37373">
                <img src="assets/images/twitter-icon.png" alt="Twitter Icon" className="footer-icon"/>
            </a>
        </footer>
    )
}