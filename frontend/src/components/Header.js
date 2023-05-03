/* Import of the main stylesheet generated from the SCSS files and preprocessor */
import '../sass/main.css';
/* Import of the images used in this component */
import GitHubLogo from '../images/github-logo.png';
import GitLabLogo from '../images/gitlab-logo.svg';
import SearchImage from '../images/emyllerMagnifyingGlass.webp';

/* Import of the useState hook required in this module */
import { useState } from "react";
/* Import of the Link component from React Router to allow hyperlinks to other routes and also in this
* case to transfer the state variable to another component */
import { Link } from "react-router-dom";

/* Definition of the Header component */
export const Header = () => {

    /* State variables for capturing the search term that is entered into the input field as well as
    * the two user arrays that are returned from the backend */
    const [user, setUser] = useState('');

    /* Function to handle the submit button event when the form is submitted */
    const formSubmitHandler = (event) => {

        event.preventDefault();

        /* Setting the search term equal to the value that was entered in the input field */
        setUser(event.target.value);

        /* Resetting the value of the input field */
        event.target.value = ''

    }

    /* Rendering of the header component */
    return (
        <div className={'header-container'}>
            {/* Header banner containing the title and two logos for the two VCS that are being used */}
            <div className={'header-banner'}>
                <Link
                    to={'/displayGitLabUsers'}
                    state={{
                        user: user,
                    }}
                >
                    <img className={'header-logo'} src={GitLabLogo} alt={"GitHub"}/>
                </Link>
                <h1>VCS Interface Application</h1>
                <Link
                    to={'/displayGitHubUsers'}
                    state={{
                        user: user,
                    }}
                >
                    <img className={'header-logo'} src={GitHubLogo} alt={"GitHub"}/>
                </Link>
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
                                if (event.key === 'Enter') {
                                    formSubmitHandler(event);
                                }
                            }}
                        />
                        {/* A search icon to appear in the input field */}
                        <img
                            className={'search-image'}
                            src={SearchImage}
                            alt={'Search'}
                        />
                        {/* Link components used to link to the respective VCS providers and also to pass the
                         search term to the components*/}
                        <Link
                            to={'/displayGitHubUsers'}
                            state={{
                                user: user,
                                github: true
                            }}
                        >
                            <button
                                className={'btn btn-submit'}
                            >
                                GitHub
                            </button>
                        </Link>
                        <Link
                            to={'/displayGitLabUsers'}
                            state={{
                                user: user,
                                gitlab: true
                            }}
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