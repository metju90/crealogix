import React from 'react';
import { shallow, mount } from 'enzyme';
import MaximumError from '../MaximumError';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer'
import theme from  '../../theme'; 
import 'jsdom-global/register';
import 'jest-styled-components'

it('it should contain correct text', () => {
    const wrapper = shallow(<ThemeProvider theme={theme}><MaximumError /></ThemeProvider>)
    // console.log(wrapper.find('MaximumError'));
    expect(wrapper.find('MaximumError').dive().text()).toEqual('You reach the highest number');
    // expect(wrapper.find('MaximumError')).toEqual('You reach the highest number');
})

it('should have green button', () => {
    const wrapper = mount(<ThemeProvider theme={theme}><MaximumError /></ThemeProvider>)
    console.log('aa', wrapper.toHaveStyleRule)
    expect(wrapper).toHaveStyleRule('background', 'red', {
        modifier: ':read-only',
      });    
    // expect(tree).toHaveStyleRule('background', 'red')
});