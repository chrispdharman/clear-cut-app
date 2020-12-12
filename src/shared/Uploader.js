import React from 'react';

import Processor from './Processor.js'
import './Uploader.css';


// https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa
class Uploader extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      file: null,
      password: null
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
    // Prompt user for password to enable access to BE APIs
    const enteredPassword = prompt('Please enter password');

    // Update password and process data, accounting for the asynchronous nature of this.setState().
    this.setState({
      password: enteredPassword
    }, function() {
        if (this.state.file && this.state.password) {
          this.processor.process(this.state);
        } else if (!this.state.password) {
          alert('No password found. Please enter the correct password on submitting.')
        } else {
          alert('No file found. Please upload a file prior to submitting.')
        }
      }
    )
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