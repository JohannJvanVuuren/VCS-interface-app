/* Import of the renderer module */
import renderer from 'react-test-renderer';

/* Import of the component being tested */
import { Home } from '../components/Home';

/* Snapshot test of the Home component */
it('Home component renders correctly', () => {
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot();
})