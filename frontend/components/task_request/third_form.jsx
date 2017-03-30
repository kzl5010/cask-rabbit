import React from 'react';
import moment from 'moment';

class ThirdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
      task_id: this.props.task_id,
      address: this.props.address,
      tasker_id: this.props.tasker_id,
      date: this.props.date,
      hours: this.props.hours
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    // this.props.updateForm(this.state);
    this.props.nextStage(e);
  }


  render() {
    return (
      <form className="request-details" onSubmit={this.handleSubmit}>


      <div className='third-form'>
        <h1> Are these details correct? </h1>
        <p>Tasker <br/><strong>{this.props.taskers[this.props.tasker_id-1].name}</strong></p>
        <p>Task <br/><strong>{this.props.tasks[this.state.task_id-1].title}</strong></p>
        <p>Place <br/><strong>{this.props.address}</strong></p>
        <p>Description <br/><strong>{this.props.details}</strong></p>
        <input className='submit' type="submit" value="Confirm & Book"/>
      </div>

      </form>
    );
  }
}

export default ThirdForm;
