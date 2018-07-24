import { RESET_STATE } from '../constants';

const reset = () => (dispatch, ) => {
    dispatch({ type: RESET_STATE })
}

export default reset;