import React from 'react';
import Home from './pages/home';
import styled from 'styled-components';
import config from './portfolioContentConfig.json';
import { ExternalLink } from 'react-feather';

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
      {/* <NavbarTabs navbarContent={config.navbar}/> */}
      <Home config={config} />
    </div>
  );
}

export default App;
