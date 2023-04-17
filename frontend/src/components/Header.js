/* Import of the main stylesheet generated from the SCSS files and preprocessor */
import '../sass/main.css';
/* Import of the images used in this component */
import GitHubLogo from '../images/github-logo.png';
import GitLabLogo from '../images/gitlab-logo.svg';
import SearchImage from '../images/emyllerMagnifyingGlass.webp';
import {useState} from "react";
import {Link} from "react-router-dom";

/* Definition of the Header component */
export const Header = () => {

    /* State variable for capturing the search term that is entered into the input field */
    const [searchTerm, setSearchTerm] = useState('')


    /* Function to handle the submit button event when the form is submitted */
   const formSubmitHandler = (event) => {
       alert(`The term you entered was ${searchTerm}`);
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
                            /* The onChange event handler that stores the search term in the state variable */
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        {/* A search icon to appear in the input field */}
                        <img
                            className={'search-image'}
                            src={SearchImage}
                            alt={'Search'}
                        />
                        {/* The submit button that will trigger the form submit event handler referred to above */}
                        <button
                            type={'submit'}
                            className={'btn btn-submit'}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}