import { INCREMENT, DECREASE, ADD_HISTORY, RESET_STATE  } from '../../constants'

const initialState = {
    current: 0,
    history: []
}
export default function(state = initialState, action) {
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
        case ADD_HISTORY:
            return {
                ...state,
                history:  action.payload
            } 
        case RESET_STATE:
            return {
                current: 0,
                history: []
            }
        default:
            return state;
    }
}