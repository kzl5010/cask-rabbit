import React from 'react';

class TaskerItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateTasker(this.props.tasker.id, e);
  }

  render() {
    console.log(this.props.updateTasker);
    if (this.props.updateTasker === undefined) {
      return (
        <li className="tasker-item" key={this.props.tasker.id}>
      {// photo here
      }
          <div className="tasker-profile">
            <p className="tasker-detail">{this.props.tasker.name}</p>
            <p className="tasker-detail">{this.props.tasker.email}</p>
            <p className="tasker-detail">{this.props.tasker.zip_code}</p>
            <p className="tasker-detail">{this.props.tasker.price}</p>
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
          <p className="tasker-detail-1">Name: {this.props.tasker.name}</p>
          <p className="tasker-detail">E-mail: {this.props.tasker.email}</p>
          <p className="tasker-detail">Hourly Rate: ${this.props.tasker.price}</p>
          <p className="tasker-detail">Cost: ${this.props.hours*this.props.tasker.price}</p>
          <p className="tasker-detail">Zip Code: {this.props.tasker.zip_code}</p>
          <button className="tasker-button" onClick={this.handleClick}>Select Tasker
          </button>
        </div>
      </li>
    );
  }
}


export default TaskerItem;
