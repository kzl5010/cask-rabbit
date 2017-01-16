import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//TODO FIX THE JBUILDER FOR TASKREQUEST FORM AND HOW TO PASS IT IN
// react components
import SessionFormContainer from './session_form/session_form_container';
import TaskRequestFormContainer from './task_request/task_request_form_container';
// import AccountContainer from './account/account_container';
import App from './app';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  const fetchTaskRequestOnEnter = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    } else {
      store.dispatch(fetchTaskRequests());
    }
  }
  
  //    <Route path="tasks" component={} onEnter={_ensureLoggedIn} />

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />

          <Route path="task_requests" component={TaskRequestFormContainer} onEnter={_ensureLoggedIn}/>
          {//<Route path="account" component={AccountContainer} onEnter={_ensureLoggedIn} />
          }
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
