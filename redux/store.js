// dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// redux dependencies
import { reducer } from '@/redux/reducer';

// export store
export const makeStore = (initialState, options) => {
  return createStore(
    reducer,
    initialState,
    compose(composeWithDevTools(applyMiddleware()), applyMiddleware(ReduxThunk))
  );
};
