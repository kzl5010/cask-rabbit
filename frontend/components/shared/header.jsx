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
          <button className="header-button"><Link to="/">Dashboard</Link>
          </button>
          <button className="header-button"><Link to="/account">Account</Link>
          </button>

          <button className="header-button" onClick={this.handleClick}>Log Out</button>
        {//    <button className="header-button" onClick={logout}>Log Out</button>
//        <li className="header-list-item"><Link to="/taskers">Taskers</Link></li>
        }

        </ul>
      );
    }else {
      Nav = (
        <ul className="header-list">
          <button className="header-button"><Link to="/login">Log In</Link>
          </button>
          <button className="header-button"><Link to="/signup">Sign Up</Link>
          </button>
          <button className="header-button" onClick={this.loginGuest}>Guest</button>

        </ul>
      );
    }

    return (
      <header className="header">
        <nav className="header-nav">
          <section className="header-logo">
            <Link to="/">
              <img src="https://res.cloudinary.com/dsaxhw9ii/image/upload/v1486359739/Logomakr_15Wz0G_z63cem.png" alt="logo" className="logo-img"/>
            </Link>
{/*
              <Link to="/">
              <h3 className="logo-h3">Home</h3>
            </Link>
            */ }
          {Nav}
          </section>
        </nav>
      </header>
    );
  }
}

export default Header;
