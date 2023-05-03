import renderer from 'react-test-renderer';
import Link from 'react-router-dom';

it ('renders correctly', () => {
    const tree = renderer
        .create(<Link to="/gitHubCommits">GitHubCommit Page</Link>)
            .toJSON();
        expect(tree).toMatchSnapShot();

})