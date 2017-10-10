import { merge } from 'lodash';

import {
  RECEIVE_TASK,
  RECEIVE_TASKS,
} from '../actions/task_actions';

const TasksReducer = (state = { errors: [] }, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TASK:
      const tasker = action.task;
      return merge({}, state, {[task.id]: task});
    case RECEIVE_TASKS:
      return action.tasks;
    default:
      return state;
    }

};

export default TasksReducer
