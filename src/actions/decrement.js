import { DECREASE, HISTORY, MAXIMUM, MINIMUM  } from '../constants';

const x = () => (dispatch, getState) => {
    let  { current, history } = getState().counter
    const { isMaximumCountReach } = getState().errors;
    // dispatch spinner if calls over 
    // the network required
    if (current === 0) {
        dispatch({ type: MINIMUM, payload: true })
        return;
    }
    if (current === 10 && isMaximumCountReach)  {
        dispatch({ type: MAXIMUM, payload: false })
    }
    history.push(current)
    dispatch({ type: HISTORY, payload: history });
    current--;
    dispatch({ type: DECREASE, payload: current });

}

export default x;