/**
 * imoprting React librara to work with JSX format,
 */
import React from 'react';
/**
 * imoprting react-dom package to handle rending the JSX into the DOM,
 */
import { render } from 'react-dom';
/**
 * importing created context from context-api (state managment system) to get the state with the help of useContext hook into our component
 */
import SettingProvider from './context';
/**
 * importing an external style document of fortawesome
 */
import '@fortawesome/fontawesome-free/css/all.min.css';
/**
 * importing an external style document of bootsratp
 */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * importing App component
 */
import App from './app';
/**
 * function component representing a Root component
 * @returns JSX Root component
 */
const Root = () => {
    // Wrapping the whole website with the context provider component to make the context state accessible to all website components
    return (
        <SettingProvider>
            <App />
        </SettingProvider>
    )
}
// rendering the Root component into DOM through html element has " root " id as an attribute
render(<Root />, document.getElementById("root"));