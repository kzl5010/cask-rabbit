import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import TaskerIndexContainer from '../tasker/tasker_index_container';
import GreetingContainer from '../home_page/greeting_container';

class ThirdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
      task_id: this.props.task_id,
      address: this.props.address,
      tasker_id: this.props.tasker_id,
      date: this.props.date
    };
    this.onChange = (address) => this.setState({ address });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTasker = this.updateTasker.bind(this);
  }

  // handleChange(field) {
  //   return e => {
  //     this.setState({[field]: e.target.value});
  //     this.props.updateForm(this.state);
  //   }
  // }

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
    return (
      <form className="taskRequest-form" onSubmit={this.props.handleSubmit}>
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
