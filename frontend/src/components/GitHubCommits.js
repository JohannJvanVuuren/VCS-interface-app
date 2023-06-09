/* Import of main stylesheet generated by the SCSS files and preprocessor*/
import '../sass/main.css';
/* Import of axios client to make API call to backend */
import axios from "axios";
/* Import of React Hooks used in this component */
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

/* Definition of the GitHubCommits component that displays all commits for a specific repo. The commits are in
* descending order so the latest commit will appear at the top of the list */
export const GitHubCommits = () => {

    /* Declaration and initialisation of the state variable needed in this component */
    const [commitsList, setCommitsList] = useState([]);

    /* Use of the useLocation hook to get the state attribute data from the Link component to this page */
    const location = useLocation();
    const user = location.state.user;
    const repoName = location.state.repoName;

    /* The useEffect hook to make the axios call to the backend only when the user or repoName changes */
    useEffect(() => {

        /* The axios call to the githubCommits route on the backend. The username and repo name is encoded in
        * the body of the post request */
        axios.post('http://localhost:8000/githubCommits', {
            user: user,
            repoName: repoName
        })
            .then(response => {
                setCommitsList(response.data)
            })
            .catch(error => {
                console.log('Error', error.message);
            })

    }, [user, repoName]); // useEffect hook's dependencies

    return (
        <div className={'commit-container'}>
            {/* Using the Array.map method to loop through the list of commits received back from the backend
             and render the required properties */}
            {commitsList.map((commit, index) => {
                return (
                    <div key={index}>
                        <p>Date: {commit.commit.author.date} <span>Comment: {commit.commit.message}</span></p>
                    </div>
                )
            })}
        </div>
    )
}