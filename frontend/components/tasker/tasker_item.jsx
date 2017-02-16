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
    this.props.nextStage(e); 
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

      );
    }
    return (
      <li className="tasker-item" key={this.props.tasker.id}>
      {// photo here
      }
        <div className="tasker-profile">
          <img src={this.props.tasker.imageurl} alt="Tasker Image" className="tasker-image"/>
          <br/>
          Name: <strong>{this.props.tasker.name}</strong>
          <br/>
          E-mail: <strong>{this.props.tasker.email}</strong>
          <br/>
          Hourly Rate: ${this.props.tasker.price}
          <br/>
          Price: ${this.props.hours*this.props.tasker.price}
          <br/>
          Zip Code: {this.props.tasker.zip_code}
          <br/>
          <br/>
          <button className="tasker-button" onClick={this.handleClick}>Select Tasker
          </button>
        </div>
      </li>
    );
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
