import React from 'react';
// import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';
// import DatePicker from 'react-datepicker';
import TaskerIndexContainer from '../tasker/tasker_index_container';
import GreetingContainer from '../home_page/greeting_container';
import FirstForm from './first_form';
import SecondForm from './second_form';
import ThirdForm from './third_form';

class TaskRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 1,
      // task_id: this.props.params.taskId,
      // address: "",
      form: {
        details: null,
        task_id: this.props.params.taskId,
        address: null
      },
      form2: {
        tasker_id: "",
        date: moment(),
        hours: 1
      },
      // details: "",
      errors: null
    };

    this.onChange = (address) => this.setState({ address });
    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTasker = this.updateTasker.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.updateForm2 = this.updateForm2.bind(this);
    this.nextStage = this.nextStage.bind(this);
  }

  formComplete() {
    this.missingFields = [];
    if (!this.state.form.details) {
      this.missingFields.push("You must write some details");
    }
    if (!this.state.form.task_id) {
      this.missingFields.push("You must choose a task");
    }
    if (!this.state.form.address) {
      this.missingFields.push("You must choose an address");
    }
    if (this.missingFields.length > 0) {
      // this.displayMissing();
    }
    return (this.state.form.details && this.state.form.task_id && this.state.form.address);
  }

  secondFormComplete() {
    this.missingFields = [];
    if (!this.state.form2.tasker_id) {
      this.missingFields.push("You must choose a tasker");
    }
    if (!this.state.form2.date) {
      this.missingFields.push("You must choose a day");
    }
    if (!this.state.form2.hours) {
      this.missingFields.push("You must choose a time frame");
    }
    if (this.missingFields.length > 0) {
      // this.displayMissing();
    }
    return (this.state.form2.date && this.state.form2.tasker_id && this.state.form2.hours);
  }

  nextStage(e) {
    e.preventDefault();
    if ((this.state.stage === 1) && this.formComplete()) {
      this.setState({ stage: 2 });
      $('#1').removeClass('stage-active');
      $('#1').addClass('stage-complete');
      $('#2').addClass('stage-active');
    } else if ((this.state.stage === 2) && this.secondFormComplete()) {
      this.setState({ stage: 3 });
      $('#2').removeClass('stage-active');
      $('#2').addClass('stage-complete');
      $('#3').addClass('stage-active');
    } else if (this.state.stage === 3){
      this.createBooking();
    }
  }

  componentDidMount() {
    this.props.fetchTasks();
    this.props.fetchTaskers();
  }

  updateForm(obj) {
    this.setState({form: obj});
  }

  updateForm2(obj) {
    this.setState({form2: obj});
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
    // taskRequest.task_id = this.props.params.taskId;
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
    console.log(this.missingFields);
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
        {this.missingFields
        }
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


    let stage;
    if (this.state.stage === 1) {
      stage = <FirstForm nextStage={this.nextStage} updateForm={this.updateForm} task_id={this.state.task_id} tasks={this.props.tasks.tasks}/>
    } else if (this.state.stage === 2) {
      stage = <SecondForm nextStage={this.nextStage} updateForm={this.updateForm2} taskers={this.props.taskers.taskers}/>
    } else {
      stage = <ThirdForm nextStage={this.nextStage} details={this.state} submit={this.handleSubmit}/>
    }

    return (
      <section className="taskRequest-container">
        <div id="alert"></div> { //TODO FIX THIS??? ERRORS
        }
        <nav className='stage-header'>
          <ul className='stage-items-group'>
            <li id='1' className='stage-active'><strong>1.</strong>Task Details</li>
            <li id='2'><strong>2.</strong>Select Tasker</li>
            <li id='3'><strong>3.</strong> Confirm and Book</li>
          </ul>
        </nav>
        <div className="booking-form">
          {stage}
        </div>
      </section>
    )
    // return (
    //     <section className="taskRequest-container">
    //       <form className="taskRequest-form" onSubmit={this.handleSubmit}>
    //         <br/>
    //         <br/>
    //         <h4>Task Request</h4>
    //         <div id="alert">{  this.renderErrors()   } </div>
    //         <ul className="taskRequest-entries">
    //           <li>Select Task:  &nbsp; &nbsp;
    //             <select value={this.state.task_id} onChange={this.handleChange("task_id")}>
    //             { taskOptions
    //             }
    //             </select>
    //           </li>
    //           <br/>
    //           <li> Select Date :
    //             <DatePicker selected={this.state.date} onChange={this.changeDate} className="none"/>
    //           </li>
    //           <br/>
    //           <br/>
    //           <li>
    //             <PlacesAutocomplete value={this.state.address} onChange={this.onChange} />
    //           </li>
    //         <br/>
    //         <li>
    //           <label>Details for Tasker
    //           <textarea value={this.state.details} placeholder="Describe the task for the Tasker"
    //           onChange={this.handleChange("details")} className="taskRequest-form-text" />
    //           </label>
    //         </li>
    //         <br/>
    //           <li>
    //             <label>Hours of work for Tasker &nbsp;&nbsp;
    //             <input type="number" value={this.state.hours} placeholder="1"
    //             onChange={this.handleChange("hours")} className="taskRequest-form-number"
    //             min="1.0" max="10" step="0.5"/>
    //             </label>
    //           </li>
    //         <br/>
    //           <li> Tasker :  &nbsp;
    //             <select value={this.state.tasker_id} onChange={this.handleChange("tasker_id")}>
    //             {taskerOptions
    //             }
    //             </select>
    //           </li>
    //         </ul>
    //         <TaskerIndexContainer updateTasker={this.updateTasker} hours={this.state.hours}/>
    //         <button className="taskRequest-button" type="submit"> <div>Confirm Request?</div>
    //         </button>
    //       </form>
    //     </section>
    //
    // );
  }
}

export default TaskRequestForm;
