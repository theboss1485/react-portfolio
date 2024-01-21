import '../styles/page-styles/Contact.css'
import React, { useState, useEffect } from 'react';
export default function Contact(){

    const [errorConfirmationMessageText, setErrorConfirmationMessageText] = useState("");
    const [contactMessageText, setContactMessageText] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    

    const handleBlur = async (event) => {

        const emailRegex =  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        let nameOK = true;
        let emailOK = true;
        let messageOK = true;

        if (event.target.id === "name"){

            if(event.target.value.trim() === ""){

                setErrorConfirmationMessageText("name is required");
                nameOK = false;

            } else {

                nameOK = true;
                setName(event.target.value.trim());
            }
        
        } else if (event.target.id === "email"){

            if(event.target.value.trim() === ""){

                setErrorConfirmationMessageText("email is required");
                emailOK = false;
               

            } else if(!event.target.value.trim().match(emailRegex)){

                setErrorConfirmationMessageText("You have entered an invalid email address. Email addresses must be entered in the format someone@example.com");
                emailOK = false;
            
            } else {

                emailOK = true;
                setEmail(event.target.value.trim());
            }

        } else if (event.target.id === "message"){

            if(event.target.value.trim() === ""){


                setErrorConfirmationMessageText("message is required");
                messageOK = false;
            
            } else {

                messageOK = true;
                setContactMessageText(event.target.value.trim())
            }
        } 

        if(nameOK && emailOK && messageOK){

            setErrorConfirmationMessageText("");
        }
    }

    const handleSubmit = (event) => {

        let errorText = "";

        event.preventDefault();

        if(name && email && contactMessageText){

            setErrorConfirmationMessageText("Submit button clicked");
        
        } else {

            let missingFieldCount = 0;

            if(!name){

                errorText = "name "
                missingFieldCount++;
            }

            if(!email){

                if(missingFieldCount > 0){

                    errorText += "and email "
                
                } else {

                    errorText += "email "
                }

                missingFieldCount++;
            }

            if(!contactMessageText){

                if(missingFieldCount > 0){

                    errorText += "and message "
                
                } else {

                    errorText += "message "
                }

                missingFieldCount++;
            }

            errorText += "required";
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