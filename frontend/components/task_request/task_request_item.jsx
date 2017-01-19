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
    debugger;
    this.props.deleteTaskRequest(this.props.taskRequest.id);
  }

  render() {
    return (
      <li className="taskRequest-item" key={this.props.taskRequest.id}>
      {// photo here
      }
        <div className="taskRequest-profile">
          Tasker: {this.props.taskRequest.tasker}
          <br/>
          Tasker email: {this.props.taskRequest.tasker_email}
          <br/>
          Task: {this.props.taskRequest.task}
          <br/>
          Date: {this.props.taskRequest.day}
          <br/>
          Address: {this.props.taskRequest.address}
        </div>
        <button className="task-request-button" onClick={this.handleClick}>
        DELETE TASK???
        </button>
      </li>
    )
  }
}

export default TaskRequestItem;
