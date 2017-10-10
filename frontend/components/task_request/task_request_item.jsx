import React from 'react';

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
        <div className="taskRequest-profile">
          <img className="tasker-thumb" src={this.props.taskRequest.tasker_imageurl} alt="Tasker Image"/>
          <ul className="taskRequest-details">
          <li><h4 className="tr-tasker-name">{this.props.taskRequest.tasker} </h4></li>
          <li>
          Email : {this.props.taskRequest.tasker_email}
          </li>
          <li>
          Task : {this.props.taskRequest.task}
          </li>
          <li>
          Date : {this.props.taskRequest.day}
          </li>
          <li>
          Price : $ {this.props.taskRequest.rate*this.props.taskRequest.hours }
          </li>
          <li>
          Hours : {this.props.taskRequest.hours}
          </li>
          <li>
          </li>
          </ul>
          <button className="task-request-button" onClick={this.handleClick}>
          Cancel Task
          </button>
        </div>
    );
  }
}

export default TaskRequestItem;
