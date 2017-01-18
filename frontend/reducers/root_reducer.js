import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import TaskRequestsReducer from './task_requests_reducer';
import TaskersReducer from './taskers_reducer';
import TasksReducer from './tasks_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  taskRequests: TaskRequestsReducer,
  taskers: TaskersReducer,
  tasks: TasksReducer
});

export default RootReducer;
