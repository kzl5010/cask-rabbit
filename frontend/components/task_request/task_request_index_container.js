import { connect } from 'react-redux';
import TaskRequestIndex from './task_request_index';
import { fetchTaskRequests, deleteTaskRequest } from '../../actions/task_request_actions';

const mapStateToProps = (state) => ({
  taskRequests: state.taskRequests.task_requests
});

const mapDispatchToProps = dispatch => ({
  deleteTaskRequest: taskRequest => dispatch(deleteTaskRequest(taskRequest)),
  fetchTaskRequests: () => dispatch(fetchTaskRequests())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskRequestIndex);
