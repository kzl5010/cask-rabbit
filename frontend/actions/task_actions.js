import * as APIUtil from '../util/task_api_util';

export const FETCH_TASK = "FETCH_TASK";
export const FETCH_TASKS = "FETCH_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";

export const fetchTasker = id => dispatch => (
  APIUtil.fetchTask(id).then(task => dispatch(receiveTask(task)))
);

export const fetchTaskers = () => dispatch => (
  APIUtil.fetchTasks().then(tasks => dispatch(receiveTasks(tasks)))
);

const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});
