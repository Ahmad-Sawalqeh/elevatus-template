/**
 * imoprting React librara to work with JSX format,
 * importing useContext hook to get website state  from context-api (state managment system), 
 * importing useState hook to create an internal state for a function component
 * importing useEffect hook to handle a componentDidMount life cycle, to call a REST-api which has content of the website
 */
import React, { createContext, useState, useEffect } from 'react';
/**
 * exporting the created context to other modules
 */
export const SettingsContext = createContext();
/**
 * url variable has the REST-api link
 */
const url = 'https://pd-europe-west4-api-v1.elevatus.io/api/candidate/v1/company?sub_domain=demo'
/**
 * function component representing a SettingProvider component, where will be a wrapper of all website components
 * @returns JSX SettingProvider component
 */
function SettingProvider(props) {
    /**
     * using useState hook to create an internal state for saving the active index in the carousel
     */
    const [data, setData] = useState({})
    /**
     * using useEffect hook to handle a componentDidMount life cycle, and calling a REST-api
     */
    useEffect(() => {
        callAPI( url, 'get');
    }, [])
    /**
     * method help to fetch an REST-api, and updating the state of the component.
     */
    const callAPI = (url, method = 'get') => {
        return fetch(url, {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json', },
        })
        .then(response => response.json())
        .then(result => {
            setData({...result.results}) 
        })
        .catch( (e) => console.error(e) );
    };
    /**
     * state object,
     * data has the value of API,
     * setData method to update the state
     * breakpoints property has all srceens width that will help the " swiper " packeage and the used slider be responsive
     */
    const state = {
        data,
        setData,
        breakpoints: {
            1200: {
                width: 1200,
                slidesPerView: 4,
            },
            1024: {
                width: 1024,
                slidesPerView: 3,
            },
            768: {
                width: 768,
                slidesPerView: 2,
            },
            481: {
                width: 481,
                slidesPerView: 2,
            }
        }
    }
    /**
     *  main method to return JSX of the component
     */
    return(
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    );    
}
// exporting the SettingProvider component to another modules
export default SettingProvider;