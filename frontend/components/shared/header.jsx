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
          // <li className="header-list-item"><Link to="/">Find Chef</Link></li>
          // <li className="header-list-item"><Link to="/reservations">Reservations</Link></li>
          // <li className="header-list-item"><Link to="/account">Account</Link></li>

          <li><button className="header-button" onClick={this.handleClick}>Log Out</button> </li>
        </ul>
      );
    }else {
      headerNav = (
        <ul className="header-list">
          <li className="header-list-item"><Link to="/login">Log In</Link></li>
          <li className="header-list-item"><Link to="/signup">Sign Up</Link></li>
          <li><button className="header-button" onClick={this.loginGuest}>Demo Login</button></li>
        </ul>
      );
    }

    return (
      <header className="header">
        <nav className="header-nav">
          <section className="header-logo">
            <Link to="/">
              <img src="http://res.cloudinary.com/l2-b2/image/upload/v1478447878/logo_white_xzwc91.png" alt="logo" className="logo-img"/>
            </Link>
            <Link to="/">
              <h3 className="logo-h3">Home Cooking</h3>
            </Link>
          </section>
          {headerNav}
        </nav>
      </header>
    );
  }
}

export default Header;
