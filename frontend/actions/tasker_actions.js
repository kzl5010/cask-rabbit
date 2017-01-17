import * as APIUtil from '../util/tasker_api_util';

export const FETCH_TASKER = "FETCH_TASKER";
export const FETCH_TASKERS = "FETCH_TASKERS";
export const RECEIVE_TASKER = "RECEIVE_TASKER";
export const RECEIVE_TASKERS = "RECEIVE TASKERS";

export const fetchTasker = id => dispatch => (
  APIUtil.fetchTasker(id).then(tasker => dispatch(receiveTasker(tasker)))
);

export const fetchTaskers = () => dispatch => (
  APIUtil.fetchTaskers().then(taskers => dispatch(receiveTaskers(taskers)))
);

const receiveTasker = tasker => ({
  type: RECEIVE_TASKER,
  tasker
});

const receiveTaskers = taskers => ({
  type: RECEIVE_TASKERS,
  taskers
});
