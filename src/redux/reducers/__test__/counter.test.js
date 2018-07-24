import counterReducer from '../counter';
import {
    INCREMENT,
    DECREASE,
    RESET_STATE,
    ADD_HISTORY
} from '../../../constants';

it('handles action of type RESET_STATE', () => {
    const initialState = {
        count: 0,
        history: []
    }
    const action = {
        type: RESET_STATE
    }
    const newState = counterReducer([], action)
    expect(newState).toEqual(initialState)
});

it('handles action of type INCREMENT', () => {
    const action = {
        type: INCREMENT,
        payload: 4
    }
    const newState = counterReducer([], action)
    expect(newState.count).toEqual(4)
});

it('handles action of type DECREASE', () => {
    const action = {
        type: DECREASE,
        payload: 3
    }
    const newState = counterReducer([], action)
    expect(newState.count).toEqual(3)
});

it('handles action of type ADD_HISTORY', () => {
    const action = {
        type: ADD_HISTORY,
        payload: [2,3,5]
    }
    const newState = counterReducer([], action)
    expect(newState.history).toEqual([2,3,5])
});

it ('handle actions with unknown type', () => {
    expect(counterReducer([], {})).toEqual([]);
});