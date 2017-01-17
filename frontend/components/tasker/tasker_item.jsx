import React from 'react';

import { Link, hashHistory, withRouter } from 'react-router';

class TaskerItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
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
        </div>
      </li>

    )
  }
}

export default TaskerItem;
