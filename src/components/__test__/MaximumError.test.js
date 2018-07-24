import React from 'react';
import { shallow } from 'enzyme';
import MaximumError from '../MaximumError';
import { ThemeProvider } from 'styled-components';
import theme from  '../../theme'; 

it('it should contain correct text', () => {
    const wrapper = shallow(<ThemeProvider theme={theme}><MaximumError /></ThemeProvider>)
    expect(wrapper.find('MaximumError').dive().children().text()).toEqual('You reach the highest number');
})