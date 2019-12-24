// dependencies
import axios from 'axios';
import C from '@/redux/constants';

// export actions
export const getInitialState = (host) => {
  return (dispatch) => {
    dispatch({ type: C.START_LOADING });
    return axios
      .get(`http://${host}/api/initial`)
      .then(({ data }) => data)
      .then((payload) => dispatch({ type: C.SET_INITIAL_STATE, payload }))
      .then(() => dispatch({ type: C.END_LOADING }))
      .catch((err) => {
        dispatch({ type: C.END_LOADING });
        console.log('erro', err);
      });
  };
};
