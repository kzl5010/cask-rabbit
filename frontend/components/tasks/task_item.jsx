import React from 'react';

import { Link, hashHistory, withRouter } from 'react-router';

class TaskItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Link to={`/tasks/${this.props.task.id}/task_requests`} className="task-item" key={this.props.task.id}>
      {// photo here
      }
        <div className="task-profile">
          <img src={this.props.task.imageurl} alt="Task Image" className="task-image"/>
          <h3 className="task-title">{this.props.task.title}</h3>
          <br/>
          {this.props.task.description}
          <br/>
          <Link to={`/tasks/${this.props.task.id}/task_requests`}>
            <button className="task-request-button">
              <span>Request Task</span>
            </button>
          </Link>
        </div>
      </Link>

    );
  }
}
//
// const TaskItem = ({ task }) => {
//   if (task) {
//     return (
//         <li className="task-item" key={task.id}>
//         {// photo here
//         }
//           <div className="task-profile">
//             {task.title}
//             <br/>
//             {task.description}
//             <br/>
//             <Link to={`/tasks/${task.id}/task_requests`}>
//               <button className="task-request-button">
//                 <span>Request Task</span>
//               </button>
//             </Link>
//           </div>
//         </li>
//     )
//   }
// }

export default TaskItem;
