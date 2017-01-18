import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
import DatePicker from 'react-datepicker';
//TODO DECIDE WHETHER THE TASKER IS DECIDED BEFORE OR AFTER THIS

class TaskRequestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: "",
      tasker: "",
      date: moment(),
      details: ""
    };
  this.onChange = (address) => this.setState({ address });
  this.changeDate = this.changeDate.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  changeDate(date) {
    this.setState({ date: date});
  }

  handleSubmit(e) {
    e.preventDefault();
    let taskRequest = this.state;
    taskRequest.date = taskRequest.date.toDate();
    taskRequest.tasker_id = 1;
    taskRequest.user_id = this.props.userId;
    taskRequest.task_id = this.props.params.taskId;
    debugger;

    this.props.createTaskRequest(taskRequest);
    this.setState({
      address: "",
      tasker: "",
      date: moment(),
      details: ""
    });
  }

  renderErrors() {
    // if (this.props.errors === undefined) {
    //   return null;
    // }
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <section>
        <section className="taskRequest">
          <form className="taskRequest-form" onSubmit={this.handleSubmit}>
            <h4>Task Request</h4>
            {  this.renderErrors()
            }
            <DatePicker selected={this.state.date} onChange={this.changeDate} className="none"/>
            <PlacesAutocomplete value={this.state.address} onChange={this.onChange} />
            <label>Details for Tasker</label>
            <textarea value={this.state.details} placeholder="Describe the task for the Tasker"
            onChange={this.handleChange("details")} className="taskRequest-form-text" />
            <button className="taskRequest-button" type="submit"> <div>Submit Request</div>
            </button>
          </form>
        </section>
      </section>

    )
  }
}

export default TaskRequestForm
