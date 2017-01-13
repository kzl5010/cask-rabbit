import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import TaskRequestsReducer from './task_requests_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  taskRequests: TaskRequestsReducer
});

export default RootReducer;
