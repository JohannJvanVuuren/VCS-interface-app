/* Import of the main stylesheet generated by the SCSS files and preprocessor */
import '../sass/main.css';

/* Import of the useLocation hook which will enable to get the state passed via the Link components in
* the Header component */
import { useLocation } from 'react-router-dom';

/* Definition of the DisplayGitHubUsers component */
export const DisplayGitHubUsers = (props) => {

    /* Creation of an instance of useLocation */
    const location = useLocation();
    /* Storing the state data from the useLocation instance */
    const propsData = location.state;

    console.log(propsData.gitHubUserArray)

    return(
        <div>
            <h2 className="mb-4">
                React Send / Get State using Link Component Example
            </h2>
            <p>Login: {propsData.gitHubUserArray[0].login}</p>
        </div>
    )

}