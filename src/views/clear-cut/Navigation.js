import React from 'react';
import RootNavigation from '../../shared/RootNavigation';
import { Link, NavLink } from 'react-router-dom'

import logo from '../../media/images/logo.png';
import './Navigation.css';


class Navigation extends React.Component {

  render() {
    const activeLinkStyle = {
      backgroundColor: "var(--depressed-button-colour)",
      border: "var(--depressed-button-colour) 1px solid",
      margin: "3px"
    };

    return (
      <div className='Nav-bar'>
        <RootNavigation />
        <div className="Nav-pane Logo-pane">
          <Link to="/clear-cut">
            <img src={logo} className="Nav-logo" alt="logo" />
          </Link>
        </div>

        <div className="Nav-pane Links-pane">
          <NavLink exact to="/clear-cut/about" activeStyle={activeLinkStyle}>
            ABOUT
          </NavLink>
          
          <NavLink exact to='/clear-cut/upload' activeStyle={activeLinkStyle}>
            UPLOAD
          </NavLink>

          <NavLink exact to='/clear-cut/manage' activeStyle={activeLinkStyle}>
            MANAGE
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;