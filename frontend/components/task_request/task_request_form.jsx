import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import TaskerIndexContainer from '../tasker/tasker_index_container';
import GreetingContainer from '../home_page/greeting_container';
//TODO DECIDE WHETHER THE TASKER IS DECIDED BEFORE OR AFTER THIS

class TaskRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      tasker_id: "",
      date: moment(),
      details: "",
      hours: 1
    };
    this.onChange = (address) => this.setState({ address });
    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTasker = this.updateTasker.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
    this.props.fetchTaskers();
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  changeDate(date) {
    this.setState({ date: date});
  }

  updateTasker(tasker_id) {
    this.setState({tasker_id: tasker_id});
  }

  nextForm(e) {
    e.preventDefault();

  }

  handleSubmit(e) {
    e.preventDefault();
    let taskRequest = this.state;
    taskRequest.date = taskRequest.date.toDate();
    // taskRequest.tasker_id = this.props.tasker_id;
    taskRequest.user_id = this.props.currentUser.id;
    taskRequest.task_id = this.props.params.taskId;
    this.props.createTaskRequest(taskRequest);
    this.setState({
      address: "",
      tasker_id: "",
      date: moment(),
      details: "",
      hours: 1
    });
  }

  renderErrors() {
    if (this.props.errors === undefined) {
      return null;
    }
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
    if (!this.props.currentUser) {
      return (
        <GreetingContainer/>
      );
    }
    return (
        <section className="taskRequest-container">
          <form className="taskRequest-form" onSubmit={this.handleSubmit}>
            <br/>
            <br/>
            <h4>Task Request</h4>
            {  this.renderErrors()
            }
            <ul className="taskRequest-entries">
              <li>
                <DatePicker selected={this.state.date} onChange={this.changeDate} className="none"/>
              </li>
            <br/>
            <br/>
              <li>
                <PlacesAutocomplete value={this.state.address} onChange={this.onChange} />
              </li>
            <br/>
            <li>
              <label>Details for Tasker
              <textarea value={this.state.details} placeholder="Describe the task for the Tasker"
              onChange={this.handleChange("details")} className="taskRequest-form-text" />
              </label>
            </li>
            <br/>
              <li>
                <label>Hours of work for Tasker &nbsp;&nbsp;
                <input type="number" value={this.state.hours} placeholder="1"
                onChange={this.handleChange("hours")} className="taskRequest-form-number" />
                </label>
              </li>
            </ul>
            <TaskerIndexContainer updateTasker={this.updateTasker} hours={this.state.hours}/>
            <button className="taskRequest-button" type="submit"> <div>Confirm Request?</div>
            </button>
          </form>
        </section>

    );
  }
}

export default TaskRequestForm;
