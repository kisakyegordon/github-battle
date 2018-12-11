import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from './Nav';

configure({ adapter: new Adapter() });

describe("Test Results Component", () => {
    it("tests for the snapshot", () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper).toMatchSnapshot();
    })
})