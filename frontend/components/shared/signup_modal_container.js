import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupModal from './signup_modal';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
