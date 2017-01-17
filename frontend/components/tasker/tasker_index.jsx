import React from 'react';

import TaskerItem from './tasker_item';

class TaskerIndex extends React.Component {
  constructor(props) {
    debugger;
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
            <TaskerItem key={tasker.id} tasker={tasker}/>
          ))}
        </ul>
      </section>
    )
  }
};

export default TaskerIndex;
