import React from 'react';
import moment from 'moment';
import GreetingContainer from '../home_page/greeting_container';
import FirstForm from './first_form';
import SecondForm from './second_form';
import ThirdForm from './third_form';
import { hashHistory } from 'react-router'

class TaskRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 1,
      form: {
        details: null,
        task_id: this.props.params.taskId,
        address: null
      },
      form2: {
        tasker_id: "1",
        date: moment(),
        hours: 1
      },
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
      this.missingFields.push("Details can't be blank. ");
    }
    if (!this.state.form.task_id) {
      this.missingFields.push("Please choose a task. ");
    }
    if (!this.state.form.address) {
      this.missingFields.push("Please choose an address.");
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
      let taskRequest = this.state;
      taskRequest.date = this.state.form2.date.toDate();
      taskRequest.tasker_id = this.state.form2.tasker_id;
      taskRequest.hours = this.state.form2.hours;
      taskRequest.details = this.state.form.details;
      taskRequest.task_id = this.state.form.task_id;
      taskRequest.address = this.state.form.address;
      taskRequest.user_id = this.props.currentUser.id;
      taskRequest.form2 = null;
      this.props.createTaskRequest(taskRequest);
      hashHistory.push("/")
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
    let taskRequest = this.state;
    taskRequest.date = taskRequest.form2.date.toDate();
    taskRequest.tasker_id = this.state.form2.tasker_id;
    taskRequest.hours = this.state.form2.hours;
    taskRequest.details = this.state.form.details;
    taskRequest.task_id = this.state.form.task_id;
    taskRequest.address = this.state.form.address;
    taskRequest.user_id = this.props.currentUser.id;
    this.props.createTaskRequest(taskRequest);
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
      stage = <FirstForm nextStage={this.nextStage} updateForm={this.updateForm} task_id={this.state.form.task_id} tasks={this.props.tasks.tasks}/>
    } else if (this.state.stage === 2) {
      stage = <SecondForm nextStage={this.nextStage} updateForm={this.updateForm2} taskers={this.props.taskers.taskers}/>
    } else {
      stage = <ThirdForm nextStage={this.nextStage} details={this.state.form.details} submit={this.handleSubmit}
      task_id={this.state.form.task_id} address={this.state.form.address} tasker_id={this.state.form2.tasker_id}
      taskers={this.props.taskers.taskers} date={this.state.form2.date} hours={this.state.form2.hours}
      tasks={this.props.tasks.tasks}/>
    }

    return (
      <section className="taskRequest-container">
        <div id="alert"></div> { //TODO FIX THIS??? ERRORS
        }
        <nav className='stage-header'>
          <ul className='stage-items-group'>
            <li id='1' className='stage-active'><strong>1.</strong>Task Details</li>
            <li id='2'><strong>2.</strong>Tasker</li>
            <li id='3'><strong>3.</strong> Confirm</li>
          </ul>
        </nav>
        <div className="booking-form">
          <p className="missing-fields">{this.missingFields}</p>
          {stage}
        </div>
      </section>
    )

  }
}

export default TaskRequestForm;
