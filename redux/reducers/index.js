import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux'
import accountReducer from './account.reducer';

const combinedReducer = combineReducers({
  a: accountReducer,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  } else {
    return combinedReducer(state, action);
  }
};

export default reducer
