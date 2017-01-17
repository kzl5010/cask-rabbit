import * as APIUtil from '../util/task_request_api_util';

export const FETCH_TASK_REQUEST = "FETCH_TASK_REQUEST";
export const FETCH_TASK_REQUESTS = "FETCH_TASK_REQUESTS";
export const CREATE_TASK_REQUEST = "CREATE_TASK_REQUEST";
export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const RECEIVE_TASK_REQUEST = "RECEIVE_TASK_REQUEST";
export const RECEIVE_TASK_REQUESTS = "RECEIVE_TASK_REQUESTS";
export const REMOVE_TASK_REQUEST = "REMOVE_TASK_REQUEST";
export const RECEIVE_TASK_REQUEST_ERRORS = "RECEIVE_TASK_REQUEST_ERRORS";

export const fetchTaskRequest = id => dispatch => (
  APIUtil.fetchTaskRequest(id).then(
    taskRequest => dispatch(receiveTaskRequest(taskRequest))
  )
);

export const fetchTaskRequests = () => (dispatch) => (
  APIUtil.fetchTaskRequests().then(
    taskRequests => dispatch(receiveTaskRequests(taskRequests))
  )
);

export const createTaskRequest = taskRequest => dispatch => (
  APIUtil.createTaskRequest(taskRequest).then(
    taskRequest1 => dispatch(receiveTaskRequest(taskRequest1)), err => dispatch(receiveTaskRequestErrors(err.responseJSON))
  )
);

export const updateTaskRequest = taskRequest => dispatch => (
  APIUtil.updateTaskRequest(taskRequest).then(
    taskRequest1 => dispatch(receiveTaskRequest(taskRequest1)), err => dispatch(receiveTaskRequestErrors(err.responseJSON))
  )
);

export const deleteTaskRequest = id => dispatch => (
  APIUtil.deleteTaskRequest(id).then(
    taskRequest => dispatch(removeTaskRequest(taskRequest))
  )
);

const receiveTaskRequest = taskRequest => ({
  type: RECEIVE_TASK_REQUEST,
  taskRequest
});

const receiveTaskRequests = taskRequests => ({
  type: RECEIVE_TASK_REQUESTS,
  taskRequests
});

const removeTaskRequest = taskRequest => ({
  type: REMOVE_TASK_REQUEST,
  taskRequest
});

const receiveTaskRequestErrors = errors => ({
  type: RECEIVE_TASK_REQUEST_ERRORS,
  errors
});
