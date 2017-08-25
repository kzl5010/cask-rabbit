import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import LoginModal from './login_modal';

const mapStateToProps = ({session}, ownProps) => ({
  currentUser: session.currentUser,
  errors: session.errors,
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
