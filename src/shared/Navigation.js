import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import logo from '../media/images/logo.png';
import './Navigation.css';


class Navigation extends React.Component {

  render() {
    const activeLinkStyle = {
      fontWeight: "bold"
    };

    return (
      <div className='Nav-bar'>
        <div className="Nav-pane Logo-pane">
          <Link to="/">
            <img src={logo} className="Nav-logo" alt="logo" />
          </Link>
        </div>

        <div className="Nav-pane Links-pane">
          <NavLink exact to="/about" activeStyle={activeLinkStyle}>
            About
          </NavLink>
          
          <NavLink exact to='/upload' activeStyle={activeLinkStyle}>
            Upload
          </NavLink>

          <NavLink exact to='/manage' activeStyle={activeLinkStyle}>
            Manage
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;