import React from 'react';
import AnagramForm from '../AnagramForm';
import {Button, FormControl} from 'react-bootstrap';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders', () => {
   shallow(<AnagramForm/>);
});

it("Find Button", () => {
    const wrapper = mount(<AnagramForm />);
    expect(wrapper.find(Button)).toHaveLength(1);
});

it("Find Words Inputs", () => {
    const wrapper = mount(<AnagramForm />);
    expect(wrapper.find(FormControl)).toHaveLength(2);
});

it("Input Anagram", () => {
    const wrapper = mount(<AnagramForm />);

    const firstWord = wrapper.find('#first-word-input').at(0);
    firstWord.simulate('change', { target: { value: 'Hello' } });

    const secondWord = wrapper.find('#second-word-input').at(0);
    secondWord.simulate('change', { target: { value: 'olleH' } });

    const check = wrapper.find(Button);
    check.simulate('click');

    const heading = wrapper.find('#alert-heading').at(0);
    expect(heading.text()).toEqual('Anagram!');

    const feedback = wrapper.find('#feedback').at(0);
    expect(feedback.text()).toEqual('Hello and olleH are anagrams');
});

it("Not Anagram", () => {
    const wrapper = mount(<AnagramForm />);

    const firstWord = wrapper.find('#first-word-input').at(0);
    firstWord.simulate('change', { target: { value: 'Hello' } });

    const secondWord = wrapper.find('#second-word-input').at(0);
    secondWord.simulate('change', { target: { value: 'hlleH' } });

    const check = wrapper.find(Button);
    check.simulate('click');

    const heading = wrapper.find('#alert-heading').at(0);
    expect(heading.text()).toEqual('Not Anagram');

    const feedback = wrapper.find('#feedback').at(0);
    expect(feedback.text()).toEqual('Hello and hlleH are not anagrams');
});


it("Word Errors", () => {
    const wrapper = mount(<AnagramForm />);

    const firstWord = wrapper.find('#first-word-input').at(0);
    firstWord.simulate('change', { target: { value: 'Hello123' } });

    const secondWord = wrapper.find('#second-word-input').at(0);
    secondWord.simulate('change', { target: { value: '123olleH' } });


    const check = wrapper.find(Button);
    check.simulate('click');

    /*not a word*/
    const heading = wrapper.find('#alert-heading').at(0);
    expect(heading.text()).toEqual('Word Error');
    const feedback = wrapper.find('#feedback').at(0);
    expect(feedback.text()).toEqual('"Hello123" is not a word');

    /*invalid characters*/
    firstWord.simulate('change', { target: { value: 'Hello' } });
    secondWord.simulate('change', { target: { value: '123olleH' } });
    check.simulate('click');
    expect(heading.text()).toEqual('Word Error');
    expect(feedback.text()).toEqual('"123olleH" is not a word');

    /*word too long*/
    firstWord.simulate('change', { target: { value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' } });
    secondWord.simulate('change', { target: { value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' } });
    check.simulate('click');
    expect(heading.text()).toEqual('Word Error');
    expect(feedback.text()).toEqual('Word cannot contain more than 50 characters');

    /*empty word*/
    firstWord.simulate('change', { target: { value: '' } });
    secondWord.simulate('change', { target: { value: '' } });
    check.simulate('click');
    expect(heading.text()).toEqual('Word Error');
    expect(feedback.text()).toEqual('Word cannot be empty');

});


