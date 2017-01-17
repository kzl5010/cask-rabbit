import { connect } from 'react-redux';
import TaskerIndex from './tasker_index';
import { fetchTaskers } from '../../actions/tasker_actions';
import { values } from 'lodash';

const convertTaskers = ({taskers}) => values(taskers);

const mapStateToProps = (state) => ({
  taskers: state.taskers.taskers
});

export default connect(mapStateToProps)(TaskerIndex);
