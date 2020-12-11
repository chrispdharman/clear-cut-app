export default class Processor {

  constructor(type) {
    this.type = type;

    this.process = this.process.bind(this)
  }

  fireRequest(request, callback) {
    var url_details = this.getUrlDetails(request.url_ref)

    var url = url_details.url;
    var api_key = url_details.api_key;

    // Build and send request
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          callback(xhr.response);
        }
    }

    xhr.open(request.verb, url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-API-KEY', api_key);
    xhr.send(JSON.stringify(request.data));
  }

  getUrlDetails(url_ref) {
    return {
      url: null,
      api_key: null
    }
  }

  handleResponse(response){
    console.log('response: ', response);
  }

  process(data) {
    if (this.type === 'process-clear-cut') {
      var request_data = {
        image: data.file
      };

      this.fireRequest({
          url_ref: 'clear-cut-lambda-api',
          verb: 'POST',
          data: request_data
        },
        this.handleResponse
      );
      return
    }

    console.log('Handler type of ', this.type, ' is not handled.');
  }
}