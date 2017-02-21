import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user1 => dispatch(receiveCurrentUser(user1)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user1 => dispatch(receiveCurrentUser(user1)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
 );

 export const update = user => dispatch => (
   APIUtil.update(user).then(user1 => dispatch(receiveCurrentUser(user1)),
   err => dispatch(receiveErrors(err.responseJSON)))
 );

 export const guestlogin = () => dispatch => (
   APIUtil.login({ user: {email: "fakeaccount@gmail.com", password :"password"}}).then(
     user1 => dispatch(receiveCurrentUser(user1)), err => dispatch(receiveErrors(err.responseJSON))
   )
 )

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
