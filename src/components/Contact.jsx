import '../styles/Contact.css'
import React, { useState, useEffect } from 'react';
export default function Contact(){

    const [messageText, setMessagetext] = useState("");
    

    const handleBlur = async (event) => {

        const emailRegex =  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        let nameOK = true;
        let emailOK = true;
        let messageOK = true;

        if (event.target.id === "name"){

            if(event.target.value.trim() === ""){

                setMessagetext("name is required");
                nameOK = false;

            } else {

                nameOK = true;
            }
        
        } else if (event.target.id === "email"){

            if(event.target.value.trim() === ""){

                setMessagetext("email is required");
                emailOK = false;
               

            } else if(!event.target.value.trim().match(emailRegex)){

                setMessagetext("You have entered an invalid email address. Email addresses must be entered in the format someone@example.com");
                emailOK = false;
            
            } else {

                emailOK = true;
            }

        } else if (event.target.id === "message"){

            if(event.target.value.trim() === ""){


                setMessagetext("message is required");
                messageOK = false;
            
            } else {

                messageOK = true;
            }
        } 

        if(nameOK && emailOK && messageOK){

            setMessagetext("");
        }
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        setMessagetext("Submit button clicked");
        
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
                        <div className='submit-button'>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
                
                <p id="message">{errorMessageText}</p>
            </form>
        </section>
    )
}