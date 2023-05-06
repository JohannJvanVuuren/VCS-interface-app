/* Import of the renderer module */
import renderer from 'react-test-renderer';

/* Import of the component being tested */
import { Error } from '../components/Error';

/* Snapshot test for the Error component */
it('Error component renders correctly', () => {
    const tree = renderer.create(<Error/>).toJSON();
    expect(tree).toMatchSnapshot();
})