import React from 'react';
import Home from './pages/home';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import NavbarTabs from './components/NavbarTabs';
import config from './portfolioContentConfig.json';
import { ExternalLink } from 'react-feather';
import { BrowserRouter as Router } from 'react-router-dom';

export const StyledExternalLink = styled(ExternalLink)`
  padding-left: 10px;
  width: 16px;
  height: 16px;
  &:visited {
    color: inherit;
  }
`;

function App() {
  return (
    <div className='App'>
      <Navbar contentConfig={config.navbar} />
      {/* <NavbarTabs navbarContent={config.navbar}/> */}
      <Home config={config} />
    </div>
  );
}

export default App;
