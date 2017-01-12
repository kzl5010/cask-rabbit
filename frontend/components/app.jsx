import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './home_page/greeting_container';
import HeaderContainer from './shared/header_container'; 

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Cask Rabbit</h1>
      </Link>
      <HeaderContainer />
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
