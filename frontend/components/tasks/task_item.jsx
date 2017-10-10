import React from 'react';

import { Link } from 'react-router';

class TaskItem extends React.Component {
  constructor(props){
    super(props);
    this.style = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + this.props.task.imageurl + ')'
    };
  }

  render() {
    return (
      <Link to={`/tasks/${this.props.task.id}/task_requests`} className="task-item" key={this.props.task.id}>
        <div className="task-profile" style={this.style}>
          <h3 className="task-title">{this.props.task.title}</h3>
          <p className="task-description">
          {this.props.task.description}
          </p>
        </div>
      </Link>

    );
  }
}

export default TaskItem;
