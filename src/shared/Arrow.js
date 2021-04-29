import React from 'react';

import './Arrow.css';


class Arrow extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      direction: this.props.direction
    }

    this.validator();
  }

  validator() {
    // Check direction attribute is valid.
    var direction = this.state.direction;
    var valid_directions = [ 'left', 'right', 'up', 'down', ];
    var is_valid = valid_directions.includes(direction);

    if (!is_valid) throw 'Invalid Direction provided: ' + direction;
  }

  render() {
    return (
      <div className='ArrowBlock'>
        <i className={`arrow ${ this.props.direction }`}></i>
      </div>
    );
  }
}

export default Arrow;
