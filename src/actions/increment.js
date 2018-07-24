import { INCREMENT, ADD_HISTORY, MAXIMUM, MINIMUM } from '../constants';

const increment = () => (dispatch, getState) => {
    let  { count, history } = getState().counter
    const { isMinimumCountReach } = getState().errors;

    if (count >= 10) {
        dispatch({ type: MAXIMUM, payload: true })
        return;
    }
    if (count === 0 && isMinimumCountReach)  {
        dispatch({ type: MINIMUM, payload: false })
    }

    history.push(count)
    dispatch({ type: ADD_HISTORY, payload: history });

    count++;
    dispatch({ type: INCREMENT, payload: count});

}

export default increment;