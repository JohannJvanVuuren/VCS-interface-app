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
    const webUrl = location.state.webUrl;


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
        <div className={'repo-container'}>
            <div className={'heading'}>
                <div><a href={webUrl} target={'_blank'} rel="noreferrer">
                    <h1 className={'heading-primary'}>{user}</h1>
                </a>
                </div>

                <h2>Repositories</h2>
            </div>
            <div>
                {isLoading ?
                    <div className={'mx-auto'}>
                        <Spinner animation="border" variant='light'/>
                    </div>
                    :
                    repos.length === 0 ?
                        <h2 className={'no-records'}>No records found</h2>
                        :
                        <div className={'repo-flexbox'}>
                            {repos.map((repo, index) => {
                                return (
                                    <div className={'repo-wrapper'} key={index}>
                                        <a href={`https://gitlab.com/${user}/files/${repo.name}`} target={'_blank'} rel="noreferrer">
                                            <p>{repo.name}</p>
                                        </a>
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
                }
            </div>
        </div>
    )


}