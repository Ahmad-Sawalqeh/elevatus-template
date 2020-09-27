import React from 'react';
import { render } from 'react-dom';
import SettingProvider from './context';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';

const Root = () => {
    return (
        <SettingProvider>
            <App />
        </SettingProvider>
    )
}
render(<Root />, document.getElementById("root"));