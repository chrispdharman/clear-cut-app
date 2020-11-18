import logo from '../media/images/logo.png';
import React from 'react';
import './Navigation.css';


class Navigation extends React.Component {

  render() {
    return (
      <div>
        <img src={logo} className="Nav-logo" alt="logo" />

        <a
          className="Nav-link"
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>

        <a
          className="Nav-link"
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upload
        </a>

        <a 
          className="Nav-link"
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manage
        </a>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}

export default Navigation;