import React from 'react';
import { Link } from 'react-router';

class AccountForm extends React.Component {
  constructor(props){
    super(props);
    this.state  = { email: "", password: "", zip_code: "", first_name: "", last_name: ""};
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
                value={this.props.currentUser.email}
                onChange={this.handleChange("email")}
                className="user-info-input" />
            </label>
            <br/>
            <label> Password:
              <input type="password"
                value={this.props.currentUser.password}
                onChange={this.handleChange("password")}
                className="user-info-input" />
            </label>
            <br/>
            <label> First Name:
              <input type="text"
                value={this.props.currentUser.first_name}
                onChange={this.handleChange("first_name")}
                className="user-info-input" />
            </label>
            <br/>
            <label> Last Name:
              <input type="text"
                value={this.props.currentUser.last_name}
                onChange={this.handleChange("last_name")}
                className="user-info-input" />
            </label>
            <br/>
            <label> Zip_code:
              <input type="text"
                value={this.props.currentUser.zip_code}
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
