import React from 'react';
import { NavLink } from 'react-router-dom';

import './RootNavigation.css';


class Navigation extends React.Component {

  render() {
    const activeLinkStyle = {
      backgroundColor: "var(--depressed-button-colour)",
      border: "var(--depressed-button-colour) 1px solid"
    };

    return (
      <div className='Nav-bar'>
        <div className="Nav-pane Links-pane">
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