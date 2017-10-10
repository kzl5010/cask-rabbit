import React from 'react';

import TaskerItem from './tasker_item';

class TaskerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.taskers === undefined) {
      return null;
    }
    return(
      <section className="taskers-index">
        <ul className="tasker-index-list">
          {this.props.taskers.map(tasker => (
            <TaskerItem key={tasker.id} tasker={tasker} updateTasker={this.props.updateTasker} hours={this.props.hours} nextStage={this.props.nextStage}/>
          ))}
        </ul>
      </section>
    )
  }
}

export default TaskerIndex;
