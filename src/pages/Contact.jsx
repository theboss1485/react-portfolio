import '../styles/page-styles/Contact.css'
import React, { useState} from 'react';

// This function displays the Contact page.
export default function Contact(){

    const [errorConfirmationMessageText, setErrorConfirmationMessageText] = useState("");
    const [contactMessageText, setContactMessageText] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    /* This function displays an error message if the user clicks out of an input box without entering text. It also displays an error message if they
    enter in an email address that doesn't conform to the emailRegex regular expression.*/
    const handleBlur = async (event) => {

        const emailRegex =  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        if (event.target.id === "name") {

            if(event.target.value.trim() === "") {

                setErrorConfirmationMessageText("Name is required.");
                setName("");

            } else {

                setName(event.target.value.trim());
                setErrorConfirmationMessageText("");
            }
        
        } else if (event.target.id === "email") {

            if(event.target.value.trim() === "") {

                setErrorConfirmationMessageText("Email is required.");
                setEmail("");

            } else if(!event.target.value.trim().match(emailRegex)) {

                setErrorConfirmationMessageText("You have entered an invalid email address. Email addresses must be entered in the format someone@example.com");
                setEmail("");
            
            } else {

                setEmail(event.target.value.trim());
                setErrorConfirmationMessageText("");
            }

        } else if (event.target.id === "message") {

            if(event.target.value.trim() === "") {

                setErrorConfirmationMessageText("Message is required.");
                setContactMessageText("");
            
            } else {

                setContactMessageText(event.target.value.trim())
                setErrorConfirmationMessageText("");
            }
        } 
    }

    /* This function deals with the user clicking the Submit button.  If the form doesn't contain a name, valid email address, and message,
    the page will display an error.  Otherwise, it will display a message saying that the Submit button was clicked. */
    const handleSubmit = (event) => {

        let errorText = "";

        event.preventDefault();

        if(name && email && contactMessageText){

            setErrorConfirmationMessageText("Submit button clicked!");
            return;
        
        } else {

            let missingFieldCount = 0;

            if (!name) {

                errorText = "Name "
                missingFieldCount++;
            }

            if (!email) {

                if (missingFieldCount > 0) {

                    errorText += "and email "
                
                } else {

                    errorText += "Email "
                }

                missingFieldCount++;
            }

            if (!contactMessageText) {

                if (missingFieldCount > 0) {

                    errorText += "and message "
                
                } else {

                    errorText += "Message "
                }

                missingFieldCount++;
            }

            if(missingFieldCount > 1){

                errorText += "are required.";
            
            } else {

                errorText += "is required.";
            }

            missingFieldCount = 0;
        }

        setErrorConfirmationMessageText(errorText);
    }

    return (

        <section>
            <h1>Contact</h1>
            <form>
                <div className='inputs'>
                    <div className='input-section'>
                        <label htmlFor="name">Name:</label>
                        <div>
                            <input type="text" id="name" onBlur={handleBlur}></input>
                        </div>
                    </div>
                    <div className='input-section'>
                        <label htmlFor="email">Email address:</label>
                        <div>
                            <input type="text" id="email" onBlur={handleBlur}></input>
                        </div>
                    </div>
                    <div className='input-section'>
                        <label htmlFor="message">Message:</label>
                        <div>
                            <textarea id="message" onBlur={handleBlur}></textarea>
                        </div>
                        <div className='submit-button-div'>
                            <button className="actual-submit-button" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                    <p id="error-or-confirmation-message">{errorConfirmationMessageText}</p>
                </div>
            </form>
        </section>
    )
}