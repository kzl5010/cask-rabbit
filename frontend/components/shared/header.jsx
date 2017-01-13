import React from 'react';
import { Link } from 'react-router';

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
    const guest = { user: {email: "username", password :"password"}}
    this.props.login(guest);
  }

  render() {
    let headerNav;
    if (this.props.currentUser) {
      headerNav = (
        <ul className="header-list">
          <li className="header-list-item"><Link to="/">Tasks</Link></li>
          <li className="header-list-item"><Link to="/">Profile</Link></li>
          <li className="header-list-item"><Link to="/account">Account</Link></li>

          <button className="header-button" onClick={this.handleClick}>Log Out</button>
          <br/>
          <hgroup className="header-group">
            <h2 className="header-name">Hi, {this.props.currentUser.first_name}!</h2>
        {//    <button className="header-button" onClick={logout}>Log Out</button>
        }
        	</hgroup>
        </ul>
      );
    }else {
      headerNav = (
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
              <img src="http://res.cloudinary.com/dmysu7ojb/image/upload/v1484208483/Logomakr_84jHlS_iy1izl.png" alt="logo" className="logo-img"/>
            </Link>
            <Link to="/">
              <h3 className="logo-h3">Home</h3>
            </Link>
          </section>
          {headerNav}
        </nav>
      </header>
    );
  }
}

export default Header;
