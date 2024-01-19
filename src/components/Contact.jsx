import '../styles/Contact.css'
import React, { useState, useEffect } from 'react';
export default function Contact(){

    // //const [isFocusedName, setIsFocusedName] = useState(false);
    // const [nameText, setNameText] = useState("");
    // //const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    // const [emailText, setEmailText] = useState("");
    // //const [isFocusedMessage, setIsFocusedMessage] = useState(false);
    // const [messageText, setMessageText] = useState("");
    const [errorMessageText, setErrorMessageText] = useState("");

    // const handleFocusIn = (event) => {

    //     if (event.target.id === "name"){
            
    //         setIsFocusedName(true);

        
    //     } else if (event.target.id === "email"){

    //         setIsFocusedEmail(true);
        
    //     } else if (event.target.id === "message"){

    //         setIsFocusedMessage(true)
    //     } 
    // }

    const handleBlur = async (event) => {

        const emailRegex =  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        let nameOK = true;
        let emailOK = true;
        let messageOK = true;

        if (event.target.id === "name"){

            if(event.target.value.trim() === ""){

                setErrorMessageText("name is required");
                nameOK = false;
            } else {

                nameOK = true;
            }
        
        } else if (event.target.id === "email"){

            if(event.target.value.trim() === ""){

                setErrorMessageText("email is required");
                emailOK = false;
               

            } else if(!event.target.value.trim().match(emailRegex)){

                setErrorMessageText("You have entered an invalid email address. Email addresses must be entered in the format someone@example.com");
                emailOK = false;
            
            } else {

                emailOK = true;
            }

        } else if (event.target.id === "message"){

            if(event.target.value.trim() === ""){


                setErrorMessageText("message is required");
                messageOK = false;
            
            } else {

                messageOK = true;
            }
        } 

        if(nameOK && emailOK && messageOK){

            setErrorMessageText("");
        }
    }

    return (

        <section>
            <h1>Contact</h1>
            <form>
                <section className='inputs'>
                    <section className='input-section'>
                        <label htmlFor="name">Name:</label>
                        <section>
                            <input type="text" id="name" onBlur={handleBlur}></input>
                        </section>
                    </section>
                    <section className='input-section'>
                        <label htmlFor="email">Email address:</label>
                        <section>
                            <input type="text" id="email" onBlur={handleBlur}></input>
                        </section>
                    </section>
                    <section className='input-section'>
                        <label htmlFor="message">Message:</label>
                        <section>
                            <textarea id="message" onBlur={handleBlur}></textarea>
                        </section>
                        <section className='submit-button'>
                            <button>Submit</button>
                        </section>
                    </section>
                </section>
                
                <p id="error-message">{errorMessageText}</p>
            </form>
        </section>
    )
}