import React from 'react';

import scissors from '../media/images/scissors.png';
import './Animation.css';


class Animation extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showAnimation: true,
      showCancel: this.props.showCancel
    }

    this.stopAnimation = this.stopAnimation.bind(this)
  }

  stopAnimation() {
    this.setState({
      showAnimation: false
    })
  }

  render() {
    return (
      <div>
        { // Controls whether to show the animation or not
          !this.state.showAnimation? 
          <div className='StoppedAnimation AnimationMetaText'><p>Process halted.</p></div>
          : 
          <div className='MainAnimation'>
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
            { // Controls whether to show the cancel button to stop the animation or not
              !this.state.showCancel? null
              :
              <label className='StopAnimation'>
                <button className='AnimationMetaText' onClick={this.stopAnimation}>CANCEL</button>
              </label>
            }
          </div>
        }
      </div>
    );
  }
}

export default Animation;