import React from 'react';
import { Link } from 'react-router';
import TaskIndexContainer from '../tasks/task_index_container';
import TaskRequestIndexContainer from '../task_request/task_request_index_container';
import Slider from 'react-slick';

const styles = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
  fade: true
};

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <section className="greeting">
  	<hgroup className="greeting-group">
      <div className="first-line-greeting">
      <img src={currentUser.imageurl} alt="User profile pic" className="user-profile-pic"/>
      <h2 className="greeting-name">Welcome to FastRabbit, {currentUser.first_name}!</h2>
      </div>
      <button className="make_tr"><Link to="/task_request" activeClassName="make_tr">Request a Task!</Link>
      </button>

      <TaskRequestIndexContainer />
  	</hgroup>
    <div className="welcome-instructions">
    <h3> What do you need help with? </h3>
    { //Add a task_requests index here
    }
      <h4>How to get Started</h4>
      <p>Taskers love helping</p>
      <ul>
        <li>
          <div className='number-icon'>1</div>
          <div className='content'>
            <h3>Pick a Task</h3>
            <p>Choose a task from a list of available jobs</p>
          </div>
        </li>
        <li>
          <div className='number-icon'>2</div>
          <div className='content'>
            <h3>Pick a Tasker</h3>
            <p>Select a Tasker that suits your unique needs</p>
          </div>
        </li>
        <li>
          <div className='number-icon'>3</div>
          <div className='content'>
            <h3>Get it Done</h3>
            <p>Your Tasker puts in the work and ideally gets paid™</p>
          </div>
        </li>
    </ul>
    </div>
    <TaskIndexContainer/>

  </section>
);

const unloggedGreeting = () => (
  <section className="unlogged-greeting">
    <Slider className="carousel-container"{...styles}>
      <img src={carouselOne}/>
      <img src={carouselTwo}/>
      <img src={carouselThree}/>
      <img src={carouselFour}/>
    </Slider>
    <div className="carousel-text">
      <h1>Fast improvement through exceptional tutors available now!</h1>
    </div>
  </section>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : unloggedGreeting() //sessionLinks()
);

export default Greeting;
