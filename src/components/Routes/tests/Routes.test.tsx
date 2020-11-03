import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from "react-router-dom";
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Routes from '../Routes';
import AnagramForm from '../../AnagramsForm/AnagramForm';
import HowToUse from '../../HowToUse/HowToUse';
import NavBar from '../../NavBar/NavBar';
import TopTen from '../../TopTen/TopTen'


Enzyme.configure({ adapter: new Adapter()});

it('renders', () => {
    shallow(<Routes/>);
});

it('NavBar', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries = {['/']}>
            <Routes/>
        </MemoryRouter>
    );
    expect(wrapper.find(NavBar)).toHaveLength(1);
});

it('Router Home', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries = {['/']}>
            <Routes/>
        </MemoryRouter>
    );
    expect(wrapper.find(AnagramForm)).toHaveLength(1);
});

it('Router Top Ten', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries = {['/TopTen']}>
            <Routes/>
        </MemoryRouter>
    );
    expect(wrapper.find(TopTen)).toHaveLength(1);
});

it('Router How To Use', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries = {['/HowToUse']}>
            <Routes/>
        </MemoryRouter>
    );
    expect(wrapper.find(HowToUse)).toHaveLength(1);
});



