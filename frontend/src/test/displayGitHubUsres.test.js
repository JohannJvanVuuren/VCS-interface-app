import { DisplayGitHubUsers} from "../components/DisplayGitHubUsers";
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'express';


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

describe('Rendering of <DisplayGitHubUsers/> component', () => {

    it('Renders <DisplayGitHubUsers/> component without crashing', () => {
        shallow(<DisplayGitHubUsers/>);
    })
})

assert(5 < 7);