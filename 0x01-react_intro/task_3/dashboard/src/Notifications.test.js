import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('Notifications', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        const listItems = wrapper.find('li');
        expect(listItems).toHaveLength(3);
    });
    it('renders a specific paragraph text', () => {
        const wrapper = shallow(<Notifications />);
        const pElement = wrapper.find('p');
        const pText = pElement.text();
        expect(pText).toEqual('Here is the list of notifications');
    })
});