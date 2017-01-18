import React from 'react';
import { Link } from 'react-router';

class AccountForm extends React.Component {
  constructor(props){
    super(props);
    let user = this.props.currentUser;
    this.state  = { email: user.email, password: "",
    zip_code: user.zip_code, first_name: user.first_name,
    last_name: user.last_name};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.update({user})
  }

  render() {
    return (
      <div className="user-profile-container">
        <form onSubmit={this.handleSubmit} className="user-profile">
          <br/>
          Edit Account Information
          {// this.renderErrors()
        }
          <div className="user-info">
            <br/>
            <label> Email:
              <input type="text"
                value={this.state.email}
                onChange={this.handleChange("email")}
                className="user-info-input" />
            </label>
            <br/>
            <label> Password:
              <input type="password"
                value={this.state.password}
                onChange={this.handleChange("password")}
                className="user-info-input" />
            </label>
            <br/>
            <label> First Name:
              <input type="text"
                value={this.state.first_name}
                onChange={this.handleChange("first_name")}
                className="user-info-input" />
            </label>
            <br/>
            <label> Last Name:
              <input type="text"
                value={this.state.last_name}
                onChange={this.handleChange("last_name")}
                className="user-info-input" />
            </label>
            <br/>
            <label> Zip_code:
              <input type="text"
                value={this.state.zip_code}
                onChange={this.handleChange("zip_code")}
                className="user-info-input" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );s
  }
}

export default AccountForm;
