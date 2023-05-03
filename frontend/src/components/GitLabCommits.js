import '../sass/main.css';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

export const GitHubCommits = () => {

    const [commitsList, setCommitsList] = useState([]);

    const location = useLocation();
    const repoId = location.state.repoId;

    useEffect(() => {

        axios.post('http://localhost:8000/githubCommits', {
            repoId: repoId
        })
            .then(response => {
                setCommitsList(response.data)
            })
            .catch(error => {
                console.log(error);
            })

    }, [repoId]);

    return (
        <div>
            {commitsList.map((commit, index) => {
                return (
                    <div>
                        <p>Date: {commit.comitted_date} <span>Comment: {commit.title}</span></p>
                    </div>
                )
            })}
        </div>
    )
}