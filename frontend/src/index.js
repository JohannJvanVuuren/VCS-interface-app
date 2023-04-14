/* Import of React modules */
import React from 'react';
import ReactDOM from 'react-dom/client';
/* Import of reportWebVitals for performance measuring if needed later on */
import reportWebVitals from './reportWebVitals';

/* Import of main component where everything else is ultimately rendered */
import { App } from './App';

/* Import of main style sheet generated from SCSS files and preprocessor */
import './sass/main.css';

/* Rendering of the main component in the div with id root in index.html */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
