import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from '../NavBar';


Enzyme.configure({ adapter: new Adapter()});

it('renders', () => {
    mount(<NavBar/>);
});

it('Has Navbar', () => {
   const wrapper =  mount(<NavBar/>);
   expect(wrapper.find(Navbar)).toHaveLength(1);
});

it('Has Nav', () => {
    const wrapper =  mount(<NavBar/>);
    expect(wrapper.find(Nav)).toHaveLength(1);
});

it('Has Links', () => {
    const wrapper =  mount(<NavBar/>);
    expect(wrapper.find('a')).toHaveLength(4);
});

it('Icon link on click', () => {
    const wrapper =  shallow(<NavBar/>);
    const href = wrapper.find('#Anagrams').prop('href');
    expect(href).toEqual('/');
});

it('Home link on click', () => {
    const wrapper =  shallow(<NavBar/>);
    const href = wrapper.find('#Home').prop('href');
    expect(href).toEqual('/');
});

it('Top Ten link on click', () => {
    const wrapper =  shallow(<NavBar/>);
    const href = wrapper.find('#TopTen').prop('href');
    expect(href).toEqual('/TopTen');
});

