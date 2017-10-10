import React from 'react';

import TaskRequestItem from './task_request_item';

class TaskRequestIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTaskRequests();
  }

  componentWillMount() {
    this.props.fetchTaskRequests();
  }

  render() {
    if (this.props.taskRequests === undefined) {
      return null;
    }
    return(
      <section className="taskRequest-index">
          {this.props.taskRequests.map(taskRequest => (
            <TaskRequestItem key={taskRequest.id} taskRequest={taskRequest} deleteTaskRequest={this.props.deleteTaskRequest}/>
          ))}
      </section>
    )
  }
};

export default TaskRequestIndex;
