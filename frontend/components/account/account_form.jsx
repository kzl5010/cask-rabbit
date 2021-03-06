import React from 'react';
import { Link, hashHistory } from 'react-router';
import GreetingContainer from '../home_page/greeting_container';


class AccountForm extends React.Component {
  constructor(props){
    super(props);
    let user = this.props.currentUser;
    this.state  = {
      email: user.email,
      password: "",
      zip_code: user.zip_code,
      first_name: user.first_name,
      last_name: user.last_name,
      id: user.id,
      imageurl: user.imageurl
    };
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
    hashHistory.push("/")
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
    if (!this.props.currentUser) {
      return (
        <GreetingContainer/>
      )
    }
    return (
      <div className="user-profile-container">
        <form onSubmit={this.handleSubmit} className="user-profile">
          <p className="account-header"> Edit Account Information</p>
          <img src={this.props.currentUser.imageurl} alt="User profile pic" className="user-profile-pic"/>
          <br/>
          {this.state.edited}
        {  // this.renderErrors()
        }

          <div className="user-info">
            {//<p className="account-info"> Email : &nbsp; &nbsp; {this.state.email}  </p>
          }
            <ul className="user-inputs">
              <li className="user-info-item">
              </li>
              <br/>
{/*              <li className="user-info-item">
                <label> Password : &nbsp; &nbsp;
                  <input type="password"
                    value={//this.state.password
                  }
                    onChange={//this.handleChange("password")
                  }
                    className="user-info-input" />
                </label>
              </li>
              <br/>
          */  }

              <li className="user-info-item">
                <label> <p className="account-info">First Name : &nbsp; &nbsp;</p>
                  <input type="text"
                    value={this.state.first_name}
                    onChange={this.handleChange("first_name")}
                    className="user-info-input" />
                </label>
              </li>
              <br/>
              <li className="user-info-item">
                <label> <p className="account-info">Last Name : &nbsp; &nbsp;</p>
                  <input type="text"
                    value={this.state.last_name}
                    onChange={this.handleChange("last_name")}
                    className="user-info-input" />
                </label>
              </li>
              <br/>
              <li className="user-info-item">
                <label> <p className="account-info">Zip Code : &nbsp; &nbsp;</p>
                  <input type="text"
                    value={this.state.zip_code}
                    onChange={this.handleChange("zip_code")}
                    className="user-info-input" />
                </label>
              </li>
              <br/>
              <li className="user-info-item">
                <label> <p className="account-info">Image Url : &nbsp; &nbsp;</p>
                  <input type="text"
                    value={this.state.imageurl}
                    onChange={this.handleChange("imageurl")}
                    className="user-info-input" />
                </label>
              </li>
              <br/>

              <input className="edit-user-submit" type="submit" value="Submit" />
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default AccountForm;
