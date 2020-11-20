import logo from '../media/images/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css';


class Navigation extends React.Component {

  render() {
    return (
      <div className='Nav-bar'>
        <div className="Nav-pane">
          <img src={logo} className="Nav-logo" alt="logo" />
        </div>

        <div className="Nav-pane">
          <NavLink
            exact
            to="/about"
            activeStyle={{
              fontWeight: "bold"
            }}
          >
            About
          </NavLink>
          
          <NavLink
            exact
            to='/upload'
            activeStyle={{
              fontWeight: "bold"
            }}
          >
            Upload
          </NavLink>

          <NavLink
            exact
            to='/'
            activeStyle={{
              fontWeight: "bold"
            }}
          >
            Manage
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;