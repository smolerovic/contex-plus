import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import errorReducer from './error_message_reducer';
import successReducer from './success_message_reducer';
import loadingReducer from './auth_reducer';

const rootReducer = combineReducers({
  form: form,
  successReducer: successReducer,
  errorReducer: errorReducer,
  loadingReducer: loadingReducer
});

export default rootReducer;
