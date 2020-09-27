import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

const url = 'https://pd-europe-west4-api-v1.elevatus.io/api/candidate/v1/company?sub_domain=demo'

function SettingProvider(props) {

    const [data, setData] = useState({})

    useEffect(() => {
        callAPI( url, 'get');
    }, [])

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

    return(
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    );    
}

export default SettingProvider;