import { INCREMENT, DECREASE, ADD_HISTORY, RESET_STATE  } from '../../constants'

const initialState = {
    count: 0,
    history: []
}
export default function(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: action.payload
            }
        case DECREASE:
            return {
                ...state,
                count: action.payload
            }
        case ADD_HISTORY:
            return {
                ...state,
                history:  action.payload
            } 
        case RESET_STATE:
            return {
                count: 0,
                history: []
            }
        default:
            return state;
    }
}