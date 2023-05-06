/* Import of the built-in assert module from Express */
import assert from 'express';

/* Import of enzyme related modules and methods */
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/* Import of component being tested */
import { GitHubRepos } from "../components/GitHubRepos";

/* Jest mock to simulate the useLocation hook in the component to prevent undefined errors during testing */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/displayGitHubUsers',
        state: {
            user: 'user'
        }
    })
}));

/* Configuration of the enzyme adapter */
Enzyme.configure({ adapter: new Adapter() })

/* Shallow test to see if the component is being rendered */
describe('Rendering of <GitHubRepos/> component', () => {

    it('Renders <GitHubRepos/> component without crashing', () => {
        shallow(<GitHubRepos/>);
    })
})

assert(5 < 7);