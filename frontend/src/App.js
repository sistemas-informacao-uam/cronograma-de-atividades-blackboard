import React from 'react';

import Routes from './routes';

import './GlobalStyles.css';

import UserProvider from './context/User';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
