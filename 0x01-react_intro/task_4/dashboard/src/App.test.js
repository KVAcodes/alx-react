import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
    it('Verifies that App renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        const divElement1 = wrapper.find('header.App-header');
        expect(divElement1.exists()).toBe(true);
    });
    it('Verifies that App renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        const divElement2 = wrapper.find('div.App-body');
        expect(divElement2.exists()).toBe(true);
    });
    it('Verifies that App renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        const divElement3 = wrapper.find('div.App-footer');
        expect(divElement3.exists()).toBe(true);
    });

});