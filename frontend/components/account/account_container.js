import { connect } from 'react-redux';

import AccountForm from './account_form';

import { update } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  update: user => dispatch(update(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);
