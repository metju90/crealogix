import { MINIMUM, MAXIMUM } from '../../constants'

const initialState = {
    isMaximumCountReach: false,
    isMinimumCountReach: false
}
export default function(state = initialState, action) {
    switch(action.type) {
        case MINIMUM:
            return {
                ...state,
                isMinimumCountReach: action.payload
            }
        case MAXIMUM:
            return {
                ...state,
                isMaximumCountReach: action.payload
            }
        default:
            return state;
    }
}