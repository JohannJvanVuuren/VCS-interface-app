/* Import of the built-in assert module from Express */
import assert from 'express';

/* Import of enzyme related modules and methods */
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from "enzyme";
import { shallow } from 'enzyme';

/* Import of the expect assertion library from Chai */
import { expect } from 'chai';

/* Import of the jest-dom testing library */
import '@testing-library/jest-dom';

/* Import of the components being tested */
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

/* Configuration of the enzyme adapter */
Enzyme.configure({ adapter: new Adapter() });

/* Testing of the rendering of the Header component */
describe('<Header/> component', () => {
    /* Confirming that four Link components are rendered */
    it('Renders four <Link/> components', () => {
        const wrapper = shallow(<Header />);
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find(Link)).to.have.lengthOf(5);
    });

    /* Confirming that 2 images with class ".header-logo" are being rendered */
    it('Renders two ".header-logo"', () => {
        const wrapper = shallow(<Header />);
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find('.header-logo')).to.have.lengthOf(2);
    })
});

assert(5 < 7);

