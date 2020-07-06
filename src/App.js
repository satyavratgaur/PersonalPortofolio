import React from 'react';
import Overview from './pages/home';
import { Button } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import config from './portfolioContentConfig.json';

function App() {
  return (
    <div className='App'>
      <Navbar contentConfig = {config.navbar}/>
      <Sidebar />
    </div>
  );
}

export default App;
