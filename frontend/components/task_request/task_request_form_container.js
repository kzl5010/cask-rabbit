import { connect } from 'react-redux';
import TaskRequestForm from './task_request_form';
import { createTaskRequest } from '../../actions/task_request_actions';
import { fetchTasks } from '../../actions/task_actions';
import { fetchTaskers } from '../../actions/tasker_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.taskRequests.errors,
  taskers: state.taskers,
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  createTaskRequest: taskRequest => dispatch(createTaskRequest(taskRequest)),
  fetchTasks: () => dispatch(fetchTasks()),
  fetchTaskers: () => dispatch(fetchTaskers())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskRequestForm);
