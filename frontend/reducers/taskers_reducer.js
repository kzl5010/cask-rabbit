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
    default:
      return state;
    }

};

export default TaskersReducer
