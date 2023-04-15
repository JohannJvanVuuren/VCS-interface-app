/* Import of the main stylesheet generated from the SCSS files and preprocessor */
import '../sass/main.css';
/* Import of the images used in this component */
import GitHubLogo from '../images/github-logo.png';
import GitLabLogo from '../images/gitlab-logo.svg';
import SearchImage from '../images/emyllerMagnifyingGlass.webp';
import {useState} from "react";

/* Definition of the Header component */
export const Header = () => {

    const [isButtonActive, setIsActiveButton] = useState(false);



    /*  */
    const imageClickHandler = (event) => {
       setIsActiveButton(current => !current)
       console.log('clicked')
    }

    return (
        <div className={'header-container'}>
            <div className={'header-banner'}>
                <img className={'header-logo'} src={GitLabLogo} alt={"GitHub"}/>
                <h1>VCS Interface Application</h1>
                <img className={'header-logo'} src={GitHubLogo} alt={"GitHub"}/>
            </div>
            <div className={'search'}>
                <form className={'input-form'}>
                    <input
                        type={'text'}
                        className={isButtonActive ? 'search-input active' : 'search-input'}
                        placeholder={'User...'}
                    />
                    <img
                        className={'search-image'}
                        src={SearchImage}
                        alt={'Search'}
                        onClick={imageClickHandler}
                    />
                </form>
            </div>
        </div>
    )
}