import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();

  }

  loginGuest(e) {
    e.preventDefault();
    const guest = { user: {email: "fakeaccount@gmail.com", password :"password"}}
    this.props.login(guest);
  }

  render() {
    let Nav;
    if (this.props.currentUser) {
      Nav = (
        <ul className="header-list">
          <li className="header-list-item"><Link to="/">Dashboard</Link></li>
          <li className="header-list-item"><Link to="/account">Account</Link></li>

          <button className="header-button" onClick={this.handleClick}>Log Out</button>
          <br/>
        {//    <button className="header-button" onClick={logout}>Log Out</button>
//        <li className="header-list-item"><Link to="/taskers">Taskers</Link></li>
        }

        </ul>
      );
    }else {
      Nav = (
        <ul className="header-list">
          <li className="header-list-item"><Link to="/login">Log In</Link></li>
          <li className="header-list-item"><Link to="/signup">Sign Up</Link></li>
          <button className="header-button" onClick={this.loginGuest}>Demo Login</button>

        </ul>
      );
    }

    return (
      <header className="header">
        <nav className="header-nav">
          <section className="header-logo">
            <Link to="/">
              <img src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1485732183/Logomakr_7OQBzy_ntnksg.png" alt="logo" className="logo-img"/>
            </Link>
            <Link to="/">
              <h3 className="logo-h3">Home</h3>
            </Link>
          {Nav}
          </section>
        </nav>
      </header>
    );
  }
}

export default Header;
