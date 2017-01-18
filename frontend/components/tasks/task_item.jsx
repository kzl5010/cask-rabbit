import React from 'react';

import { Link, hashHistory, withRouter } from 'react-router';

// class TaskItem extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   render() {
//     return (
//       <li className="task-item" key={this.props.task.id}>
//       {// photo here
//       }
//         <div className="task-profile">
//           {this.props.task.title}
//           <br/>
//           {this.props.task.description}
//           <br/>
//           <Link to={`/tasks/${this.props.task.id}/task_requests`}>
//             <button className="task-request-button">
//               <span>Request Task</span>
//             </button>
//           </Link>
//         </div>
//       </li>
//
//     )
//   }
// }

const TaskItem = ({ task }) => {
  if (task) {
    return (
        <li className="task-item" key={task.id}>
        {// photo here
        }
          <div className="task-profile">
            {task.title}
            <br/>
            {task.description}
            <br/>
            <Link to={`/tasks/${task.id}/task_requests`}>
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
