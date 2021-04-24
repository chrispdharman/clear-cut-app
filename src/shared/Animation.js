import React from 'react';

import './Animation.css';


class Animation extends React.Component {

  render() {
    return (
      <div>
        <div className='RotatingPane Pane1'>
          <div className='RotatingObject StartObject'/>
          <div className='RotatingObject LastObject'/>
        </div>
        <div className='RotatingPane Pane2'>
          <div className='RotatingObject StartObject'/>
          <div className='RotatingObject LastObject'/>
        </div>
        <div className='RotatingPane Pane3'>
          <div className='RotatingObject StartObject'/>
          <div className='RotatingObject LastObject'/>
        </div>
        <div className='RotatingPane Pane4'>
          <div className='RotatingObject StartObject'/>
          <div className='RotatingObject LastObject'/>
        </div>
      </div>
    );
  }
}

export default Animation;