import React from 'react';

import scissors from '../media/images/scissors.png';
import './Animation.css';


class Animation extends React.Component {

  render() {
    return (
      <div>
        <div className='CuttingCircle'></div>
        <div className='RotatingPane Pane1'>
          <div className='RotatingObject StartObject'>
            <img src={scissors} className="Scissors icon" alt="scissors icon" />
          </div>
          <div className='RotatingObject LastObject'>
            <img src={scissors} className="Scissors icon" alt="scissors icon" />
          </div>
        </div>
        <div className='RotatingPane Pane2'>
          <div className='RotatingObject StartObject'>
            <img src={scissors} className="Scissors icon" alt="scissors icon" />
          </div>
          <div className='RotatingObject LastObject'>
            <img src={scissors} className="Scissors icon" alt="scissors icon" />
          </div>
        </div>
        <div className='RotatingPane Pane3'>
          <div className='RotatingObject StartObject'>
            <img src={scissors} className="Scissors icon" alt="scissors icon" />
          </div>
          <div className='RotatingObject LastObject'>
            <img src={scissors} className="Scissors icon" alt="scissors icon" />
          </div>
        </div>
        <div className='RotatingPane Pane4'>
          <div className='RotatingObject StartObject'>
            <img src={scissors} className="Scissors icon" alt="scissors icon" />
          </div>
          <div className='RotatingObject LastObject'>
            <img src={scissors} className="Scissors icon" alt="scissors icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Animation;