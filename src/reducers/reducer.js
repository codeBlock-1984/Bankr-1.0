import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import modalReducer from './modal.reducer';
import transactionReducer from './transaction.reducer';
import accountReducer from './account.reducer';
import actionReducer from './actionReducer';

const appReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  transaction: transactionReducer,
  account: accountReducer,
  action: actionReducer,
});

const reducer = (state, action) => {
  const { type } = action;
  if (type === 'LOGOUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default reducer;
