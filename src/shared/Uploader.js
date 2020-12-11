import React from 'react';

import Processor from './Processor.js'
import './Uploader.css';


// https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa
class Uploader extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      file: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.processor = new Processor(this.props.handler);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  handleClick(event) {
    this.processor.process(this.state);
  }

  render() {
    return (
      <div className='File-Uploader'>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file} alt=''/>
        <input type="submit" name="submit" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Uploader;