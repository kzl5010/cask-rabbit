import { connect } from 'react-redux';
import TaskRequestForm from './task_request_form';
import { createTaskRequest } from '../../actions/task_request_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser.id,
  errors: state.taskRequests.errors,
  taskers: state.taskers
  // task: state.tasks[ownProps.params.taskId]
})

const mapDispatchToProps = dispatch => ({
  createTaskRequest: taskRequest => dispatch(createTaskRequest(taskRequest))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskRequestForm);
