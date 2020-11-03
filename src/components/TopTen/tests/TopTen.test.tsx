import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAnagrams from './mockAnagrams';
import {Table} from 'react-bootstrap';

import TopTen from '../TopTen';

Enzyme.configure({ adapter: new Adapter()});

it('renders', () => {
    shallow(<TopTen/>);
});

it('has table', () => {
    const wrapper = mount(<TopTen mock={mockAnagrams}/>);
    expect(wrapper.find(Table)).toHaveLength(1);
    expect(wrapper.find('tr')).toHaveLength(mockAnagrams.length + 1);
});

it('No data', () => {
    const wrapper = mount(<TopTen mock={[]}/>);
    expect(wrapper.find(Table)).toHaveLength(1);
    expect(wrapper.find('tr')).toHaveLength(0);
});






