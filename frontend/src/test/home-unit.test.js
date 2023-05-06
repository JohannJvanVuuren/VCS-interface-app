/* Import of the assert module from Express */
import assert from 'assert';

/* Import of the jest-dom testing library */
import '@testing-library/jest-dom';

/* Import of the components being tested */
import {Home} from '../components/Home';
import {render, screen } from "@testing-library/react";

/* Unit testing of the Home component  */
describe('Rendering of <Home/> component',
    () => {
        /* Testing whether the title appears in the rendered component. */
        it("<Home/> is rendered", () => {
            const {getByText} = render(<Home/>);
            expect(screen.getByText("Version Control System Interface: GitHub and GitLab")).toBeInTheDocument();
        });

    })

assert(5 < 7);

