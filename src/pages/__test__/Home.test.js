import React from 'react';
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme';
import Home from '../../pages/Home';
import Root from '../../Root';
// it('has the correct type', () => {
//     const action = decreaseCounter()();
//     console.log('aaa ', action.type)
// });

describe('homee', () => {
    const initialState = { 
        counter: {
            count: 5,
            history: []
        },
        errors: {
            isMaximumCountReach: false,
            isMinimumCountReach: false
        }
    }
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = mount(
                    <Root mockedStore={store}>
                        <Home />
                    </Root>
                    )  
    })

    afterEach(() => {
        wrapper.unmount();
    })

    it('has an incremental button', () => {
       expect(wrapper.find('PlusButton').length).toEqual(1)
    });

    it('has decremental button', () => {
       expect(wrapper.find('MinusButton').length).toEqual(1)
    })

    it('has count prop equally to inital state', () => {
        expect(wrapper.find('Home').prop('count')).toEqual(5);
    })
});