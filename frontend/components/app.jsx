import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './home_page/greeting_container';
import HeaderContainer from './shared/header_container';

const App = ({ children }) => (
  <div>
    <header>
      <HeaderContainer />
{//      <GreetingContainer />
}  
    </header>
    {children}
  </div>
);

export default App;
