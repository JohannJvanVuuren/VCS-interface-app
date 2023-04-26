/* Import of the main stylesheet generated from the SCSS files and preprocessor */
import '../sass/main.css';
/* Import of the images used in this component */
import GitHubLogo from '../images/github-logo.png';
import GitLabLogo from '../images/gitlab-logo.svg';
import SearchImage from '../images/emyllerMagnifyingGlass.webp';

/* Import of the axios client */
import axios from 'axios';
/* Import of the useState hook required in this module */
import { useState} from "react";
/* Import of the Link component from React Router to allow hyperlinks to other routes and also in this
* case to transfer the state variable to another component */
import { Link } from "react-router-dom";

/* Definition of the Header component */
export const Header = () => {

    /* State variables for capturing the search term that is entered into the input field as well as
    * the two user arrays that are returned from the backend */
    const [searchTerm, setSearchTerm] = useState('');
    const [gitHubUserArray, setGitHubUserArray] = useState([]);
    const [gitLabUserArray, setGitLabUserArray] = useState([]);

    /* Function to handle the submit button event when the form is submitted */
   const formSubmitHandler = (event) => {

       event.preventDefault();

       console.log('Form submitted');


       /* Axios posts to the backend route to communicate the search term needed to submit to the external APIs  */
       axios.post(`http://localhost:8000/githubInterface`, {
           searchQuery: searchTerm
       })
           .then(response => {
               console.log(response.status);
               /* Getting the GitHub user array back from the backend and setting capturing it in
               * a state */
               setGitHubUserArray(response.data);
           })
           .catch(err => {console.log(err.message)})

       axios.post(`http://localhost:8000/gitlabInterface`, {
           searchQuery: searchTerm
       })
           .then(response => {
               console.log(response.status);
               /* Getting the GitLab user array back from the backend and setting capturing it in
               * a state */
               setGitLabUserArray(response.data);
           })
           .catch(err => {console.log(err.message)})
   }

   /* Rendering of the header component */
    return (
        <div className={'header-container'}>
            {/* Header banner containing the title and two logos for the two VCS that are being used */}
            <div className={'header-banner'}>
                <img className={'header-logo'} src={GitLabLogo} alt={"GitHub"}/>
                <h1>VCS Interface Application</h1>
                <img className={'header-logo'} src={GitHubLogo} alt={"GitHub"}/>
            </div>
            {/* The search bar below the banner. This contains the form submit button, input field as well as a
             home button because the header component will be displayed on all renders*/}
            <div className={'search'}>
                <div className={'home-btn-container'}>
                    {/* Use of React Router's Link component to create a link to the home route */}
                    <Link to={'/'}>
                        <button
                            type="submit"
                            className={'btn btn-home'}>
                            Home
                        </button>
                    </Link>
                </div>
                <div className={'form-container'}>
                    <form
                        className={'input-form'}
                        /* The pointer to the event handler for form submissions */
                        onSubmit={formSubmitHandler}
                    >
                        <input
                            type={'text'}
                            className={'search-input'}
                            placeholder={'User...'}
                            onKeyDown={event => {
                                if (event.key === "Enter") {
                                    setSearchTerm(event.target.value.toLowerCase());
                                    formSubmitHandler(event);
                            }}}
                        />
                        {/* A search icon to appear in the input field */}
                        <img
                            className={'search-image'}
                            src={SearchImage}
                            alt={'Search'}
                        />
                        {/* Link components used to link to the respective VCS providers and also to pass the
                         user arrays to the components*/}
                        <Link
                            to={'/displayGitHubUsers'}
                            state={{gitHubUserArray: gitHubUserArray}}
                        >
                            <button
                                className={'btn btn-submit'}
                            >
                                GitHub
                            </button>
                        </Link>
                        <Link
                            to={'/displayGitLabUsers'}
                            state={{gitLabUserArray: gitLabUserArray}}
                        >
                            <button
                                className={'btn btn-submit'}
                            >
                                GitLab
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}