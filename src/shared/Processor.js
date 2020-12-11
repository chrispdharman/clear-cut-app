export default class Processor {

  constructor(type) {
    this.type = type;

    this.router = this.router.bind(this)
  }

  getUrlSecrets(url_ref) {
    
  }

  fireRequest(url_ref, verb, data) {
    url_details = getUrlDetails(url_ref)

    var url = url_details.url;
    var api_key = url_details.api_key;

    // Build and send request
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.response);
        }
    }

    xhr.open(verb, url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-API-KEY', api_key);
    xhr.send(JSON.stringify(data));
  }

  router(data) {
    if (this.type === 'process-clear-cut') {
      var request_data = {
        image: data.file
      };

      fireRequest(
        'clear-cut-lambda-api',
        'POST',
        request_data
      );
    }

    console.log('Handler type of ', this.type, ' is not handled.');
  }
}