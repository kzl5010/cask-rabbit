import React from 'react';

import { Link, hashHistory, withRouter } from 'react-router';
//
class TaskRequestItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteTaskRequest(this.props.taskRequest.id);
  }

  render() {
    return (
      <li className="taskRequest-item" key={this.props.taskRequest.id}>
      {// photo here
      }
        <div className="taskRequest-profile">
          <img className="tasker-thumb" src={this.props.taskRequest.tasker_imageurl} alt="Tasker Image"/>
          <h4>{this.props.taskRequest.tasker} </h4>
          <ul className="taskRequest-details">
          <li>
          Email : {this.props.taskRequest.tasker_email}
          </li>
          <li>
          Task : {this.props.taskRequest.task}
          </li>
          <li>
          Date : {this.props.taskRequest.day}
          </li>
          { /*
          <li>
          Address : {//this.props.taskRequest.address
        }
          </li>
        */ }
          <li>
          Price : $ {this.props.taskRequest.rate*this.props.taskRequest.hours }
          </li>
          <li>
          Hours : {this.props.taskRequest.hours}
          </li>
          {/*
          <li>
          Hourly Rate : $ {//this.props.taskRequest.rate
        }
          </li>
        */}
          </ul>
          <button className="task-request-button" onClick={this.handleClick}>
            Cancel Task
          </button>
        </div>
      </li>
    );
  }
}

export default TaskRequestItem;
