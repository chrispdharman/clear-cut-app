import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import logo from '../media/images/logo.png';
import './Navigation.css';


class Navigation extends React.Component {

  render() {
    const activeLinkStyle = {
      backgroundColor: "var(--depressed-button-colour)",
      border: "var(--depressed-button-colour) 1px solid"
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
            ABOUT
          </NavLink>
          
          <NavLink exact to='/upload' activeStyle={activeLinkStyle}>
            UPLOAD
          </NavLink>

          <NavLink exact to='/manage' activeStyle={activeLinkStyle}>
            MANAGE
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;