import { DECREASE, ADD_HISTORY, MAXIMUM, MINIMUM  } from '../constants';

const decrement = () => (dispatch, getState) => {
    let  { count } = getState().counter
    const { isMaximumCountReach, history } = getState().errors;

    if (count === 0) {
        dispatch({ type: MINIMUM, payload: true })
        return;
    }
    if (count === 10 && isMaximumCountReach)  {
        dispatch({ type: MAXIMUM, payload: false })
    }
    history.push(count)
    dispatch({ type: ADD_HISTORY, payload: history });
    count--;
    dispatch({ type: DECREASE, payload: count });

}

export default decrement;