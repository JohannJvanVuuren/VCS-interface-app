import '../sass/main.css';
import Spinner from 'react-bootstrap/Spinner';

/* Import of useLocation hook to get the state information from the Link component to this component */
import {useLocation, Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';
export const GitLabRepos = () => {

    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const user = location.state.user.username;
    const id = location.state.user.id;


    useEffect(() => {

        setIsLoading(true);

        axios.post('http://localhost:8000/gitlabRepos', {
            user: user,
            id: id,
            repoId: id
        })
            .then(response => {
                const repoList = response.data;
                setRepos(repoList);
                console.log(response.data);
                setIsLoading(false);
                return response.data;
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            })


    }, [user, id]);



    return (
        <div>
            <h1>User</h1>
            <h2>Repositories</h2>
            {isLoading ?
                <div className={'mx-auto'}>
                    <Spinner animation="border" variant='light'/>
                </div>
            :
                repos.length === 0 ?
                    <h2>No records found</h2>
            :
                repos.map((repo, index) => {
                    return (
                        <div className={'repo-wrapper'} key={index}>
                            <p>{repo.name}</p>
                            <Link
                                to={'/gitHubCommits'}
                                state={{
                                    repoName: repo.name,
                                    repoId: repo.id,
                                    user: user
                                }}
                            >
                                Commits
                            </Link>
                        </div>
                    )
                })}
        </div>
    )


}