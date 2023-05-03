/* Import of main stylesheet generated by SCSS files and preprocessor */
import '../sass/main.css';

/* The home component. This is the page that will greet the user at the base url */
export const Home = () => {
    return (
        <main className={'home-container'}>
            <section className={'home-content'}>
                {/* Some text to greet the user and supply basic information on the app */}
                <h2 className={'home-heading'}>Version Control System Interface: GitHub and GitLab</h2>
                <p className={'home-paragraph1'}>
                    This application interfaces with GitHub and GitLab to enable you to search for repositories.
                </p>
                <p className={'home-paragraph2'}>
                    You will be given user, repository and commit details for the selected repository.
                    <br />
                </p>
                <p className={'home-paragraph2'}>The latest commit will appear at the top of the list.</p>
                <p className={'home-paragraph3'}>
                    Simply enter the username of the person you want to search for, hit the enter key and
                </p>
                <p className={'home-paragraph3'}>
                    click on the version control platform (button or icon) that you want to search in.
                </p>
            </section>
        </main>
    )
}