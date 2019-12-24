// dependencies

// redux dependencies
import C from '@/redux/constants';
import defaultState from '@/redux/defaultState';

// export reducer
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case C.START_LOADING:
      return { ...state, loading: state.loading + 1 };
    case C.END_LOADING:
      return { ...state, loading: state.loading - 1 };
    case C.SET_INITIAL_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
