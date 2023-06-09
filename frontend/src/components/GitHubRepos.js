/* Import of the main stylesheet generated by the SCSS files and preprocessor */
import '../sass/main.css';
/* Import of the Spinner component from React-Bootstrap */
import Spinner from 'react-bootstrap/Spinner';

/* Import of the axios client to handle the call to the backend API */
import axios from 'axios';

/* Import of the React and React Router hooks needed in this component */
import {useLocation, Link} from 'react-router-dom';
import {useEffect, useState} from "react";

/* The definition of the GitHubRepos component. This component makes a post request to the githubRepos
* route on the backend and uses the data received back to display the repos for a specific user. */
export const GitHubRepos = () => {

    /* The declaration and initialisation of the state variables needed in this component */
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    /* Making use of the useLocation hook to get the user and webUrl information from the Link component that
    * linked out to this page from DisplayGitHubUsers */
    const location = useLocation();
    const user = location.state.user.login;
    const webUrl = location.state.webUrl;

    /* The useEffect hook to handle the axios request to the backend whenever the user dependency changes */
    useEffect(() => {

        /* This variable setting is used to make sure a spinner is displayed while the data is being fetched
        *  from the backend */
        setIsLoading(true);

        /* The axios post request to the backend route. The username is encoded in the body of the request  */
        axios.post('http://localhost:8000/githubRepos', {
            user: user
        })
            .then(response => {
                setRepos(response.data);
                setIsLoading(false);
                return response.data;
            })
            .catch(error => {
                console.log('Error', error.message);
                setIsLoading(false);
            })


    }, [user]); // useEffect hook dependency

    return (
        <div className={'repo-container'}>
            <div className={'heading'}>
                <div>
                    {/* This links out to the user's GitHub web URL when the username is clicked */}
                    <a href={webUrl} target={'_blank'} rel="noreferrer">
                        <h1 className={'heading-primary'}>{user}</h1>
                    </a>
                </div>
                <h2>Repositories</h2>
            </div>
            <div>
                {/* This ternary operator handles the logic of displaying a spinner while the data is being
                 fetched from the backend. It is a chained ternary operator to handle the case where no repos
                 are found */}
                {isLoading ?
                    <div className={'mx-auto'}>
                        <Spinner animation="border" variant='light'/>
                    </div>
                    :
                    repos.length === 0 ?

                        <h2>No records found</h2>

                        :
                        /* The display of the repo names together with a link to the commits associated with
                        the specific repo */
                        <div className={'repo-flexbox'}>
                            {repos.map((repo, index) => {
                                return (
                                    <div className={'repo-wrapper'} key={index}>
                                        <a className={'repo-url'} href={repo.html_url} target={'_blank'}
                                           rel="noreferrer">
                                            <p>{repo.name}</p>
                                        </a>
                                        {/* The repo and usernames are being passed onto the gitHubCommits route
                                         via the state attribute of the React Router Link component here*/}
                                        <Link
                                            to={'/gitHubCommits'}
                                            className={'commit-links'}
                                            state={{
                                                repoName: repo.name,
                                                user: user
                                            }}
                                        >
                                            Commits
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                }
            </div>
        </div>
    )
}