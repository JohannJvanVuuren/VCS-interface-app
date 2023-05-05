import '../sass/main.css';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

export const GitHubCommits = () => {

    const [commitsList, setCommitsList] = useState([]);

    const location = useLocation();
    const user = location.state.user;
    const repoName = location.state.repoName;

    useEffect(() => {

        axios.post('http://localhost:8000/githubCommits', {
            user: user,
            repoName: repoName
        })
            .then(response => {
                setCommitsList(response.data)
            })
            .catch(error => {
                console.log(error);
            })

    }, [user, repoName]);

    return (
        <div className={'commit-container'}>
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