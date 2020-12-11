import React from 'react';
import './Uploader.css';

// https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa
class Uploader extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  submitFile(event) {
    // Process uploaded media
    var image = this.state;

    console.log('image', image);

    // Asynchronously hit the clear-cut lambda
    // fireRequest({
    //     endpoint: window.endpoints.processMedia,
    //     verb: 'POST',
    //     data: {
    //         image: mediaEntry.src,
    //         item_id: item_id
    //     }
    // });
  }

  render() {
    return (
      <div className='File-Uploader'>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
        <input type="submit" name="submit" onClick={this.submitFile}/>
      </div>
    );
  }
}

export default Uploader;