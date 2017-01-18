import React from 'react';

import TaskItem from './task_item';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.tasks === undefined) {
      return null;
    }
    return(
      <section className="tasks-index">
        <ul className="task-index-list">
          {this.props.tasks.map(task => (
            <TaskItem key={task.id} task={task}/>
          ))}
        </ul>
      </section>
    )
  }
};

// const TaskIndex = ({ tasks }) => {
//   if (tasks) {
//     return (
//         <section className="tasks-index">
//           <ul className="task-index-list">
//             {tasks.map(task => (
//               <TaskItem key={task.id} task={task}/>
//             ))}
//           </ul>
//         </section>
//     )
//   }
// }
export default TaskIndex;
