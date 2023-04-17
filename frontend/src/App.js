import {Component} from 'react';
import { Routes, Route } from 'react-router-dom';

/* Import of the components needed in this one */
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Error} from "./components/Error";

/* The main style sheet generated by the SCSS files and preprocessor */
import './sass/main.css';
/* Additional style sheet to render the background because SASS could not resolve the path of the image */
import './app.css';

/* The main component that will ultimately house all other components that are rendered. Weather this
* is directly or indirectly */
export const App = () => {
    return (
        <main className="App">
            <section>
                <Header/>
            </section>
            <Routes>
                <Route path={'/'} Component={Home} exact/>
                <Route Component={Error} />
            </Routes>
        </main>
    );
}