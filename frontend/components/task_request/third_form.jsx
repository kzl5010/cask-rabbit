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

  // handleChange(field) {
  //   return e => {
  //     this.setState({[field]: e.target.value});
  //     this.props.updateForm(this.state);
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    // this.props.updateForm(this.state);
    this.props.nextStage(e);
  }

  // renderErrors() {
  //   if (this.props.errors === undefined) {
  //     return null;
  //   }
  //   return(
  //     <ul className="errors">
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

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


// <h4>Task Request</h4>
// <div id="alert">{  this.renderErrors()   } </div>
// <ul className="taskRequest-entries">
// <li>Select Task:  &nbsp; &nbsp;
// <select value={this.state.task_id} onChange={this.handleChange("task_id")}>
// <option/>
// {taskOptions}
// </select>
// </li>
// <li>
// <PlacesAutocomplete value={this.state.address} onChange={this.onChange} />
// </li>
// <li>
// <label>Describe your problem
// <textarea value={this.state.details} rows='10' cols='50' placeholder="Describe the task for the Tasker"
// onChange={this.handleChange("details")} className="taskRequest-form-text"/>
// </label>
// </li>
// </ul>
// <button className="submit" type="submit" value="Save"></button>
