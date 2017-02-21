import React from 'react';

import TaskRequestItem from './task_request_item';

class TaskRequestIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTaskRequests();
  }

  render() {
    if (this.props.taskRequests === undefined) {
      return null;
    }
    return(
      <section className="taskRequest-index">
        { //<ul className="taskRequest-index-list">
      }
          {this.props.taskRequests.map(taskRequest => (
            <TaskRequestItem key={taskRequest.id} taskRequest={taskRequest} deleteTaskRequest={this.props.deleteTaskRequest}/>
          ))}
        {//</ul>
        }
      </section>
    )
  }
};
//
// const TaskerIndex = ({ taskers }) => {
//   if (taskers) {
//     return (
//           <section className="taskers-index">
//             <ul className="tasker-index-list">
//               {taskers.map(tasker => (
//                 <TaskerItem key={tasker.id} tasker={tasker}/>
//               ))}
//             </ul>
//           </section>
//         )
//   }
// }

export default TaskRequestIndex;
