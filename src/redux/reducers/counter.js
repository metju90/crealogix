import { INCREMENT, DECREASE, HISTORY  } from '../../constants'

const initialState = {
    current: 0,
    history: []
}
export default function(state = initialState, action) {
    console.log('aaaa ', action);
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                current: action.payload
            }
        case DECREASE:
            return {
                ...state,
                current: action.payload
            }
        case HISTORY:
        console.log('ok!!! ', action.payload)
            return {
                ...state,
                history:  action.payload
            } 
        default:
            return state;
    }
}