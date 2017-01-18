import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <section className="greeting">
  	<hgroup className="header-group">
      <h2 className="header-name">Welcome to AskRabbit, {currentUser.first_name}!</h2>
      <br/>
      <h3> What do you need help with? </h3>
  	</hgroup>
    <div>
    { //Add a task_requests index here
    }

      <h4>How to get Started</h4>
      <p>Taskers love helping</p>
      <ul>
        <li>
          <div className='badge'>1</div>
          <div className='content'>
            <h3>Pick a Task</h3>
            <p>Choose a task from a list of available jobs</p>
          </div>
        </li>
        <li>
          <div className='badge'>2</div>
          <div className='content'>
            <h3>Pick a Tasker</h3>
            <p>Select a Tasker that suits your unique needs</p>
          </div>
        </li>
        <li>
          <div className='badge'>3</div>
          <div className='content'>
            <h3>Get it Done</h3>
            <p>Your Tasker puts in the work and ideally gets paid™</p>
          </div>
        </li>
    </ul>
    </div>
  </section>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : null //sessionLinks()
);

export default Greeting;
