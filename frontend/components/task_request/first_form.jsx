import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import TaskerIndexContainer from '../tasker/tasker_index_container';
import GreetingContainer from '../home_page/greeting_container';

class TaskRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      task_id: this.props.params.taskId,
      address: null
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
    return e => {
      this.setState({[field]: e.target.value});
      this.props.updateForm(this.state);
    }
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
    this.props.updateForm(this.state);
    this.props.nextStage(e);
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
    let taskOptions = null, taskerOptions = null;
    if (this.props.tasks.tasks) {
      taskOptions = this.props.tasks.tasks.map((task, i) => (
        <option key={i} value={task.id}>{task.title}</option>
      ));
    }
    if (this.props.taskers.taskers) {
      taskerOptions = this.props.taskers.taskers.map((tasker, i)=>(
        <option key={i} value={tasker.id}>{tasker.name}</option>
      ));
    }
    return (
        <section className="taskRequest-container">
          <form className="taskRequest-form" onSubmit={this.handleSubmit}>
            <br/>
            <br/>
            <h4>Task Request</h4>
            <div id="alert">{  this.renderErrors()   } </div>
            <ul className="taskRequest-entries">
              <li>Select Task:  &nbsp; &nbsp;
                <select value={this.state.task_id} onChange={this.handleChange("task_id")}>
                { taskOptions
                }
                </select>
              </li>
              <br/>
              <li> Select Date :
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
                onChange={this.handleChange("hours")} className="taskRequest-form-number"
                min="1.0" max="10" step="0.5"/>
                </label>
              </li>
            <br/>
              <li> Tasker :  &nbsp;
                <select value={this.state.tasker_id} onChange={this.handleChange("tasker_id")}>
                {taskerOptions
                }
                </select>
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
