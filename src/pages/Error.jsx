/* I took this code from acitivity 24 of module 20.  This is a generic 'Error' page for if the user
visits an invalid URL.*/
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    
    const error = useRouteError();
    console.error(error);

    return (

        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}