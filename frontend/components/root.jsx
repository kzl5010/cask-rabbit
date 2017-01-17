import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { fetchTasker, fetchTaskers } from '../actions/tasker_actions';
import { fetchTaskRequest, fetchTaskRequests } from '../actions/task_request_actions';
import SessionFormContainer from './session_form/session_form_container';
import TaskRequestFormContainer from './task_request/task_request_form_container';
import AccountContainer from './account/account_container';
import TaskerIndexContainer from './tasker/tasker_index_container';

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

  const fetchTaskersOnEnter = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser){
      replace('/');
    } else {
      store.dispatch(fetchTaskers());
    }
  }

  const fetchTaskRequestsOnEnter = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    } else {
      store.dispatch(fetchTaskRequests());
    }
  }

  const fetchTasksOnEnter = (nextState, replace) => {
    if (! store.getState().session.currentUser) {
      replace('/login');
    } else {
      store.dispatch(fetchTasks());
    }
  }

  const fetchTaskOnEnter = (nextState) => {
    if (! store.getState().session.currentUser) {
      replace('/login');
    } else {
      store.dispatch(fetchTask(nextState.params.taskId));
    }
  }

  // const fetchUserOnEnter = (nextState, replace) {
  //   if (! store.getState().session.currentUser) {
  //     replace('/login');
  //   } else {
  //     store.dispatch(fetchUser)
  //   }
  // }

  //    <Route path="tasks" component={} onEnter={_ensureLoggedIn} />

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={ fetchTaskersOnEnter }>
          <IndexRoute component={TaskerIndexContainer} onEnter={ fetchTaskersOnEnter } />
          <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />

          <Route path="task_requests" component={TaskRequestFormContainer} onEnter={_ensureLoggedIn}/>
          <Route path="account" component={AccountContainer} onEnter={_ensureLoggedIn} />

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
