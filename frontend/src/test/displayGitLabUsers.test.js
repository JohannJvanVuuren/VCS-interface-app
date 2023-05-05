import { DisplayGitLabUsers} from "../components/DisplayGitLabUsers";
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

describe('Rendering of <DisplayGitLabUsers/> component', () => {

    it('Renders <DisplayGitLabUsers/> component without crashing', () => {
        shallow(<DisplayGitLabUsers/>);
    })
})

assert(5 < 7);