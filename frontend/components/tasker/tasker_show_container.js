import { connect } from 'react-redux';
import TaskerItem from './tasker_index';
import { fetchTasker } from '../../actions/tasker_actions';
import { values } from 'lodash';

const convertTaskers = ({taskers}) => values(taskers);

const mapStateToProps = (state, ownProps) => ({
  taskerId: ownProps.taskerId,
  updateTasker: ownProps.updateTasker
});

const mapDispatchToProps = dispatch => ({
  fetchTasker: (taskerId) => dispatch(fetchTasker(taskerId))
})

//Filter out to only within users zip code?

export default connect(mapStateToProps)(TaskerIndex);
