import React from 'react';

import { Link, hashHistory, withRouter } from 'react-router';
//
class TaskerItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateTasker(this.props.tasker.id);
  }

  render() {
    if (this.props.updateTasker === undefined) {
      return (
        <li className="tasker-item" key={this.props.tasker.id}>
      {// photo here
      }
          <div className="tasker-profile">
            {this.props.tasker.name}
            <br/>
            {this.props.tasker.email}
            <br/>
            {this.props.tasker.zip_code}
            <br/>
            {this.props.tasker.price}
          </div>
        </li>

      )
    }
    return (
      <button className="tasker-button" onClick={this.handleClick}>
      <li className="tasker-item" key={this.props.tasker.id}>
      {// photo here
      }
        <div className="tasker-profile">
          NAME: {this.props.tasker.name}
          <br/>
          E-MAIL: {this.props.tasker.email}
          <br/>
          PRICE PER HOUR: {this.props.tasker.price}
          <br/>
          ZIP_CODE: {this.props.tasker.zip_code}
        </div>
      </li>
      </button>
    )
  }
}

// const TaskerItem = ({tasker}) => {
//   if (tasker) {
//     return (
//       <li className="tasker-item" key={tasker.id}>
//       {// photo here
//       }
//         <div className="tasker-profile">
//           {tasker.name}
//           <br/>
//           {tasker.email}
//           <br/>
//           {tasker.zip_code}
//           <br/>
//         </div>
//       </li>
//     )
//   }
//
// }

export default TaskerItem;
