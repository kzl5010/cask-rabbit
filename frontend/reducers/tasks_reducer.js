import { merge } from 'lodash';

import {
  RECEIVE_TASK,
  RECEIVE_TASKS,
} from '../actions/task_actions';

const TasksReducer = (state = { errors: [] }, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TASK:
      const tasker = action.task
      return merge({}, state, {[task.id]: task});
    case RECEIVE_TASKS:
      return action.tasks;
    // case REMOVE_TASKER:
    //   let newState = merge({}, state);
    //   delete newState[action.taskRequest.id];
    //   return newState;
    // case RECEIVE_TASKER_ERRORS:
    //   const errors = action.errors;
    //   return merge({}, state, {
    //     errors
    //   });
    default:
      return state;
    }

};

export default TasksReducer
