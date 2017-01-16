import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
import DatePicker from 'react-datepicker';
//TODO DECIDE WHETHER THE TASKER IS DECIDED BEFORE OR AFTER THIS

class TaskRequestForm extends React.component {
  constructor(props) {
    super(props)
    this.state = {
      address: ""
      tasker: ""
      date: moment()
    }
  }
  this.onChange = (address) => this.setState({ address });
  this.changeDate = this.changeDate.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

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
    taskRequest.tasker_id = this.props.taskerId
    taskRequest.user_id = this.props.userId;
    taskRequest.task_id = this.props.task.id;

    this.props.createTaskRequest(taskRequest);
    this.setState({
      tasker: ""
      date: moment()
    });
  }

  render() {
    return (
      <section>
        <section className="taskRequest">
          <form className="taskRequest-form" onSubmit={this.handleSubmit}>
            <h4>Task Request</h4>
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
            <PlacesAutocomplete value={this.state.}
    )
  }
}
