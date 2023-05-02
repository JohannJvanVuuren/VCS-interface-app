import '../sass/main.css';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

export const GitHubCommits = () => {

    const [commitsList, setCommitsList] = useState([]);

    const location = useLocation();
    const user = location.state.user;
    const repoName = location.state.repoName;
    const repoId = location.state.repoId;

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
        <div>
            {commitsList.map((commit, index) => {
                return (
                    <div>
                        <p>Date: {commit.commit.author.date} <span>Comment: {commit.commit.message}</span></p>
                    </div>
                )
            })}
        </div>
    )
}