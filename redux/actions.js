// dependencies
import axios from 'axios';
import C from '@/redux/constants';

// init axios instance
const axiosInstance = axios.create({
  port: process.env.NODE_ENV !== 'production' ? 3000 : 80
});

// export actions
export const getInitialState = () => {
  return (dispatch) => {
    dispatch({ type: C.START_LOADING });
    return axiosInstance
      .get('/api/initial')
      .then(({ data }) => data)
      .then((payload) => dispatch({ type: C.SET_INITIAL_STATE, payload }))
      .then(() => dispatch({ type: C.END_LOADING }))
      .catch((err) => console.log('wooooo', err));
  };
};
