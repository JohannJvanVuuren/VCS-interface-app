/* Import of React modules */
import React from 'react';
import ReactDOM from 'react-dom/client';
/* Import of BrowserRouter from React-Router to enable the setup of routes */
import {BrowserRouter} from "react-router-dom";

/* Import of main component where everything else is ultimately rendered */
import {App} from './App';

/* Import of main style sheet generated from SCSS files and preprocessor */
import './sass/main.css';

/* Rendering of the main component in the div with id root in index.html */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Setting up the router */}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);