/* Import of the components needed in this one */
import { Header } from "./components/Header";
/* The main style sheet generated by the SCSS files and preprocessor */
import './sass/main.css';
/* Additional style sheet to render the background because SASS could not resolve the path of the image */
import './app.css';

/* The main component that will ultimately house all other components that are rendered. Weather this
* is directly or indirectly */
export const App = () => {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}