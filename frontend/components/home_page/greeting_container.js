import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  console.log(login);
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Greeting);
