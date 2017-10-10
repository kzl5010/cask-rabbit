import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { fetchTasks } from '../../actions/task_actions';
import { values } from 'lodash';

const convertTasks = ({tasks}) => values(tasks);

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
