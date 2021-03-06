import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { fetchTask, fetchTasks } from '../actions/task_actions';
import { fetchTasker, fetchTaskers } from '../actions/tasker_actions';
import { fetchTaskRequest, fetchTaskRequests } from '../actions/task_request_actions';
import SessionFormContainer from './session_form/session_form_container';
import TaskRequestFormContainer from './task_request/task_request_form_container';
import AccountContainer from './account/account_container';
import TaskIndexContainer from './tasks/task_index_container';
import TaskerIndexContainer from './tasker/tasker_index_container';
import TaskRequestIndexContainer from './task_request/task_request_index_container';
import GreetingContainer from './home_page/greeting_container';

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
      replace('/account');
    }
  };

  const fetchTaskersOnEnter = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser){
      replace('/login');
    } else {
      store.dispatch(fetchTaskers());
    }
  };

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



  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>

          <IndexRoute component={GreetingContainer} />
          <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="taskers" component={TaskerIndexContainer} onEnter= { fetchTaskersOnEnter } />
          <Route path="task_requests" component={TaskRequestIndexContainer} onEnter={ fetchTaskRequestsOnEnter }/>
          <Route path="task_request" component={TaskRequestFormContainer} />
          <Route path="account" component={AccountContainer} onEnter={_ensureLoggedIn} />
          <Route path="/tasks/:taskId/task_requests" component={TaskRequestFormContainer} />
        </Route>
      </Router>
    </Provider>
  );
};
// TODO, change this code to use lifecycle method component did mount, this is bad style
export default Root;
