import React from 'react';
import Enzyme, { mount } from 'enzyme';
import {Jumbotron, Button} from 'react-bootstrap'
import Adapter from 'enzyme-adapter-react-16';
import HowToUse from '../HowToUse';


Enzyme.configure({ adapter: new Adapter()});

it('renders', () => {
    mount(<HowToUse/>);
});


it('Has Jumbotron and Button', () => {
    const wrapper = mount(<HowToUse/>);
    expect(wrapper.find(Jumbotron)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
});


it('Click Button', () => {
    const wrapper = mount(<HowToUse/>);
    const button = wrapper.find(Button);
    button.simulate('click');
    expect(window.location.pathname).toEqual('/');
});