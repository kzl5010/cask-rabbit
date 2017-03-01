import React from 'react';
// import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import TaskerIndexContainer from '../tasker/tasker_index_container';
import GreetingContainer from '../home_page/greeting_container';

class SecondForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasker_id: "1",
      date: moment(),
      hours: 1
      // errors: null
    };

    this.onChange = (address) => this.setState({ address });
    this.changeDate = this.changeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTasker = this.updateTasker.bind(this);
  }

  componentDidMount() {
    // this.props.fetchTasks();
    // this.props.fetchTaskers();
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value});
      this.props.updateForm(this.state);
    }
  }

  changeDate(date) {
    this.setState({ date: date });
    this.props.updateForm(this.state);
  }

  updateTasker(tasker_id) {
    this.setState({ tasker_id: tasker_id });
    this.props.updateForm(this.state);
  }

  nextForm(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    this.props.updateForm(this.state);
    this.props.nextStage(e);
  }

  // renderErrors() {
  //   console.log(this.missingFields);
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
  //       {this.missingFields
  //       }
  //     </ul>
  //   );
  // }

  render() {
    // if (!this.props.currentUser) {
    //   return (
    //     <GreetingContainer/>
    //   );
    // }


    let taskOptions = null, taskerOptions = null;
    // if (this.props.tasks.tasks) {
    //   taskOptions = this.props.tasks.tasks.map((task, i) => (
    //     <option key={i} value={task.id}>{task.title}</option>
    //   ));
    // }
    if (this.props.taskers) {
      taskerOptions = this.props.taskers.map((tasker, i)=>(
        <option key={i} value={tasker.id}>{tasker.name}</option>
      ));
    }


      return (
        <form className="second-form" onSubmit={this.handleSubmit}>
          <h4>Choose Tasker</h4>
            <div id="alert">{
              // this.renderErrors()
               } </div>
            <ul className="taskRequest-entries">
              <li> Select Date :
                <DatePicker selected={this.state.date} onChange={this.changeDate} className="date"/>
              </li>
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
              <li>
              <button className="submit" type="submit" value="Save">Save
              </button>
              </li>
            </ul>
            <TaskerIndexContainer updateTasker={this.updateTasker} hours={this.state.hours} nextStage={this.props.nextStage}/>
          </form>
    );
  }
}

export default SecondForm;
