import API from '@aws-amplify/api';

API.configure();


export default class Processor {

  constructor(type) {
    this.type = type;

    this.process = this.process.bind(this)
  }

  handleResponse(response){
    console.log('response: ', response);
  }

  async process(data) {
    if (this.type === 'process-clear-cut') {
      // Send to clear cut api lambda first:
      // const request_data = {
      //   image: data.file,
      //   name: data.name
      // };
      const processed_url = 'https://clear-cut.s3.eu-west-2.amazonaws.com/results/live/20200621-205934/Bob/';

      // Store item (new)
      const apiName = 'itemstorage';
      const path = '/items'
      const request_data = {
        name: data.name,
        original_url: processed_url.concat('0001_size_reduced_image.png'),
        clearcut_url: processed_url.concat('0008_edge_masked_image.png'),
      };

      return await API.post(apiName, path, request_data);
    }

    console.log('Handler type of ', this.type, ' is not handled.');
  };
}