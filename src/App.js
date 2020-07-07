import React from 'react';
import Home from './pages/home';
import Navbar from './components/Navbar';
import config from './portfolioContentConfig.json';

function App() {
  return (
    <div className='App'>
      <Navbar contentConfig = {config.navbar}/>
      <Home config = {config} />
    </div>
  );
}

export default App;
