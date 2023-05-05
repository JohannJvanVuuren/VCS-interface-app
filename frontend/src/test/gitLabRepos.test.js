import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'express';
import {GitLabRepos} from "../components/GitLabRepos";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/displayGitHubUsers',
        state: {
            user: 'user'
        }
    })
}));


Enzyme.configure({ adapter: new Adapter() })

describe('Rendering of <GitLabRepos/> component', () => {

    it('Renders <GitLabRepos/> component without crashing', () => {
        shallow(<GitLabRepos/>);
    })
})

assert(5 < 7);