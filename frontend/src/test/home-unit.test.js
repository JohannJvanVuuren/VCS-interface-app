import {Home} from '../components/Home';
import {render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import assert from 'assert';

describe('Rendering of <Home/> component',
    () => {

        it("<Home/> is rendered", () => {
            const {getByText} = render(<Home/>);
            expect(screen.getByText("Version Control System Interface: GitHub and GitLab")).toBeInTheDocument();
        });

    })

assert(5 < 7);

