import React from 'react';
import { decreaseCounter } from '../';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import Home from '../../pages/Home'

// it('has the correct type', () => {
//     const action = decreaseCounter()();
//     console.log('aaa ', action.type)
// });

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{

    const initialState = { 
        counter: {
            count: 0,
            history: []
        },
        errors: {
            isMaximumCountReach: false,
            isMinimumCountReach: false
        }
    }
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Home store={store} /> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(container.props()).toContain(initialState)
    });

});