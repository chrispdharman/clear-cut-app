import React from 'react';
import { NavLink } from 'react-router-dom';

import './RootNavigation.css';


class Navigation extends React.Component {

  render() {
    const activeLinkStyle = {
      backgroundColor: "var(--root-depressed-button-colour)",
      border: "var(--root-depressed-button-colour) 1px solid",
      margin: "3px"
    };

    return (
      <div className='Root-nav-bar'>
        <div className="Root-nav-pane Root-links-pane">
          <NavLink exact to="/" activeStyle={activeLinkStyle}>
            HOME
          </NavLink>
          
          <NavLink exact to='/clear-cut' activeStyle={activeLinkStyle}>
            CLEAR-CUT
          </NavLink>

          <NavLink exact to='/other' activeStyle={activeLinkStyle}>
            OTHER
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;