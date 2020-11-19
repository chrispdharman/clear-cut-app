import logo from '../media/images/logo.png';
import React from 'react';
import './Navigation.css';


class Navigation extends React.Component {

  render() {
    return (
      <div className='Nav-bar'>
        <div className="Nav-pane">
          <img src={logo} className="Nav-logo" alt="logo" />
        </div>

        <div className="Nav-pane">
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
        </div>
      </div>
    );
  }
}

export default Navigation;