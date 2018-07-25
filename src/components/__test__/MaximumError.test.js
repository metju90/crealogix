import React from 'react';
import { mount } from 'enzyme';
import MaximumError from '../MaximumError';
import Root from '../../Root';

it('it should contain correct text', () => {
    const wrapper = mount(
                <Root>
                    <MaximumError />
                </Root>)
    expect(wrapper.find('MaximumError').children().text()).toEqual('You reached the highest number');
})