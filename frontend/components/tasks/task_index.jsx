import React from 'react';

import TaskItem from './task_item';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    if (this.props.tasks === undefined) {
      return null;
    }
    return(
      <section className="tasks-index">
        <h2> Available Tasks </h2>
        {//<GreetingContainer />
        }

        <ul className="task-index-list">
          {this.props.tasks.map(task => (
            <TaskItem key={task.id} task={task}/>
          ))}
        </ul>
      </section>
    )
  }
};

export default TaskIndex;
