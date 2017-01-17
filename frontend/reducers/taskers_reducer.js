import { merge } from 'lodash';

import {
  RECEIVE_TASKER,
  RECEIVE_TASKERS,
} from '../actions/tasker_actions';

const TaskersReducer = (state = { errors: [] }, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TASKER:
      const tasker = action.tasker
      return merge({}, state, {[tasker.id]: tasker});
    case RECEIVE_TASKERS:
      return action.taskers;
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

export default TaskersReducer
