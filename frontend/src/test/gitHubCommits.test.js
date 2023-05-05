import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'express';
import {GitHubCommits} from "../components/GitHubCommits";


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

describe('Rendering of <GitHubCommits/> component', () => {

    it('Renders <GitHubCommits/> component without crashing', () => {
        shallow(<GitHubCommits/>);
    })
})

assert(5 < 7);