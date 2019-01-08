import TestComponent from './../StateFunctions/TestComponent';
import { getPromise1 } from './../StateFunctions/mock';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Test Snapshot', ()=>{
    it('test the Test Component', ()=>{
        const tree = renderer.create(<TestComponent input = { 'Input'} />).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

describe('testing the mock function', ()=> {
    test('test the GetPromise1 function', ()=>{
        return expect(getPromise1()).resolves.toBe('This is promise 1 Response')
    })
})

describe('testing the DOM Manipulation', ()=> {
    let testWrapper;
    beforeEach(() => {
        testWrapper = shallow(<TestComponent input = {'Input'}/>)      
    })

    const DEFAULT_TEXT = 'Hello..... This is Test Component..... Input ->Input';
    const CLICKED_TEXT = 'This is clicked';

    test('test the testDiv DOM', () => {
        expect(testWrapper.text()).toBe(DEFAULT_TEXT);
    })

    test('test the DOM click', () => {
        testWrapper.simulate('click');
        expect(testWrapper.text()).toBe(CLICKED_TEXT);
        testWrapper.simulate('click');
        expect(testWrapper.text()).toBe(DEFAULT_TEXT);
    })
})
