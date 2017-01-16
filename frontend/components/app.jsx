import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './home_page/greeting_container';
import HeaderContainer from './shared/header_container';
import Footer from './shared/footer';

const App = ({ children }) => (
  <div id="container" className="login-page">
    <header>
      <HeaderContainer />
{//      <GreetingContainer />
}
    </header>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
