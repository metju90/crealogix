import { INCREMENT, HISTORY, MAXIMUM, MINIMUM } from '../constants';

const x = () => (dispatch, getState) => {
    let  { current, history } = getState().counter
    const { isMinimumCountReach } = getState().errors;
    console.log('///', current, history, isMinimumCountReach)
    // dispatch spinner if calls over 
    // the network required
    if (current >= 10) {
        dispatch({ type: MAXIMUM, payload: true })
        return;
    }
    if (current === 0 && isMinimumCountReach)  {
        dispatch({ type: MINIMUM, payload: false })
    }

    history.push(current)
    dispatch({ type: HISTORY, payload: history });

    current++;
    dispatch({ type: INCREMENT, payload: current});

}

export default x;