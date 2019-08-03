import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import modalReducer from './modal.reducer';
import transactionReducer from './transaction.reducer';
import accountReducer from './account.reducer';

const reducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  transaction: transactionReducer,
  account: accountReducer,
});

export default reducer;
