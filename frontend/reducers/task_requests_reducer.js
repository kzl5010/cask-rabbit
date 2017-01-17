import { merge } from 'lodash';

import {
  RECEIVE_TASK_REQUEST,
  RECEIVE_TASK_REQUESTS,
  REMOVE_TASK_REQUEST, RECEIVE_TASK_REQUEST_ERRORS
} from '../actions/task_request_actions';

const TaskRequestsReducer = (state = { errors: [] }, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TASK_REQUEST:
      const taskRequest = action.taskRequest
      return merge({}, state, {[taskRequest.id]: taskRequest});
    case RECEIVE_TASK_REQUESTS:
      return action.taskRequests;
    case REMOVE_TASK_REQUEST:
      let newState = merge({}, state);
      delete newState[action.taskRequest.id];
      return newState;
    case RECEIVE_TASK_REQUEST_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
    }

};

export default TaskRequestsReducer
