import '../sass/main.css';
import GitHubLogo from '../images/github-logo.png';
import GitLabLogo from '../images/gitlab-logo.svg';

export const Header = () => {
    return (
        <div className={'header-container'}>
            <div className={'header-banner'}>
                <img className={'header-logo'} src={GitLabLogo} alt={"GitHub"}/>
                <h1>VCS Interface Application</h1>
                <img className={'header-logo'} src={GitHubLogo} alt={"GitHub"}/>
            </div>
        </div>
    )
}