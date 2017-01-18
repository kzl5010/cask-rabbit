import React from 'react';

import { Link, hashHistory, withRouter } from 'react-router';

class TaskItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <li className="task-item" key={this.props.task.id}>
      {// photo here
      }
        <div className="task-profile">
          {this.props.task.title}
          <br/>
          {this.props.tasker.description}
          <br/>
          <Link to={`/tasks/${this.props.task.id}/reservation`}>
          <button className="task-request-button">
            <span>Request Task</span>
          </button>
        </Link>
        </div>
      </li>

    )
  }
}

export default TaskItem;
