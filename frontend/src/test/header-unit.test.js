import Adapter from 'enzyme-adapter-react-16';
import Enzyme from "enzyme";
import { expect } from 'chai';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header/> component', () => {
    it('Renders four <Link/> components', () => {
        const wrapper = shallow(<Header />);
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find(Link)).to.have.lengthOf(5);
    });

    it('Renders two ".header-logo"', () => {
        const wrapper = shallow(<Header />);
        // eslint-disable-next-line jest/valid-expect
        expect(wrapper.find('.header-logo')).to.have.lengthOf(2);
    })
});



