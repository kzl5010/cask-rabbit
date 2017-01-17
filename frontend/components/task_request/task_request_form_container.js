import { connect } from 'react-redux';
import TaskRequestForm from './task_request_form';
import { createTaskRequest } from '../../actions/task_request_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser.id,
  errors: state.taskRequests.errors
  // task: state.tasks[ownProps.params.taskId]
// TODO: IMPLEMENT THIS IN THE FORM  tasker: state.taskers[ownProps.params.taskerId]
})

const mapDispatchToProps = dispatch => ({
  createTaskRequest: taskRequest => dispatch(createTaskRequest(taskRequest))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskRequestForm);
