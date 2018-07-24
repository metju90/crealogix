import React from 'react';
import { mount } from 'enzyme';
import Home from '../../pages/Home';
import Root from '../../Root';

describe('plus button ',()=>{
    let wrapper;
    const initialState = { 
        counter: {
            count: 0,
            history: []
        }
    }
    beforeEach(() => {
        wrapper = mount(<Root>
                        <Home />
                    </Root>)  
    })
    it('has a workng incremental buttom', () => {
        // console.log('debg', wrapper.find('PlusButton').debug());
        expect(wrapper.find('Home').prop('count')).toEqual(0);
        wrapper.find('Home').find('PlusButton').children().children().prop('onClick')();
        wrapper.update();
        expect(wrapper.find('Home').prop('count')).toEqual(1); 
        wrapper.find('Home').find('PlusButton').children().children().prop('onClick')();
        wrapper.update();       
        expect(wrapper.find('Home').prop('count')).toEqual(2); 
    });
});