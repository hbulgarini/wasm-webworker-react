import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from '../UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <UsersList />
      </header>
    </div>
  );
}

export default App;
