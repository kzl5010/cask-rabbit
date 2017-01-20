import React from 'react';
import { Link } from 'react-router';

class AccountForm extends React.Component {
  constructor(props){
    super(props);
    let user = this.props.currentUser;
    this.state  = { email: user.email, password: "",
    zip_code: user.zip_code, first_name: user.first_name,
    last_name: user.last_name, id: user.id};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.update(user);
    this.state.edited = "Edit submitted";
    // location.href = '/'
  }

  // renderErrors() {
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
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="user-profile-container">
        <form onSubmit={this.handleSubmit} className="user-profile">
          <br/>
          Edit Account Information
          <br/>
          <br/>
          <img src={this.props.currentUser.imageurl} alt="User profile pic"/>
          <br/>
          {this.state.edited}
        {  // this.renderErrors()
        }

          <div className="user-info">
            <br/>
            <ul>
              <li className="user-info-item">
                <label> Email : &nbsp; &nbsp;
                  <input type="text"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                    className="user-info-input" />
                </label>
              </li>
              <br/>
              <li className="user-info-item">
                <label> Password : &nbsp; &nbsp;
                  <input type="password"
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    className="user-info-input" />
                </label>
              </li>
              <br/>
              <li className="user-info-item">
                <label> First Name : &nbsp; &nbsp;
                  <input type="text"
                    value={this.state.first_name}
                    onChange={this.handleChange("first_name")}
                    className="user-info-input" />
                </label>
              </li>
              <br/>
              <li className="user-info-item">
                <label> Last Name : &nbsp; &nbsp;
                  <input type="text"
                    value={this.state.last_name}
                    onChange={this.handleChange("last_name")}
                    className="user-info-input" />
                </label>
              </li>
              <br/>
              <li className="user-info-item">
                <label> Zip Code : &nbsp; &nbsp;
                  <input type="text"
                    value={this.state.zip_code}
                    onChange={this.handleChange("zip_code")}
                    className="user-info-input" />
                </label>
              </li>
              <br/>
              <input type="submit" value="Submit" />
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default AccountForm;
