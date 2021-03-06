import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import TaskerIndexContainer from '../tasker/tasker_index_container';
import GreetingContainer from '../home_page/greeting_container';

class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: "",
      task_id: this.props.task_id,
      address: ""
    };
    this.onChange = (address) => this.setState({ address });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTasker = this.updateTasker.bind(this);
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

    const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>)

    let taskOptions = null, taskerOptions = null;
    if (this.props.tasks) {
      taskOptions = this.props.tasks.map((task, i) => (
        <option key={i} value={task.id}>{task.title}</option>
      ));
    }
    return (
      <form className="first-form" onSubmit={this.handleSubmit}>
          <h4>Task Request</h4>
            <div id="alert">{  this.renderErrors()   } </div>
            <ul className="taskRequest-entries-1">
              <div className="first-box">
              <li><label>Select Task  <br/>
                <select value={this.state.task_id} onChange={this.handleChange("task_id")}>
                <option/>
                {taskOptions}
                </select>
                </label>
              </li>
              <li> <label>
                <PlacesAutocomplete value={this.state.address} onChange={this.onChange} autocompleteItem={AutocompleteItem}/>
                </label>
              </li>
              </div>
              <div className="first-box">
            <li>
              <label>Describe your problem<br/>
              <textarea value={this.state.details} rows='10' cols='40' placeholder="Describe the task for the Tasker"
              onChange={this.handleChange("details")} className="taskRequest-form-text"/>
              </label>
            </li>
            <button className="submit" type="submit" value="Save">Save</button>
            </div>
            </ul>
      </form>
    );
  }
}

export default FirstForm;
