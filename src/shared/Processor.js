export default class Processor {

  constructor(type) {
    this.type = type;

    this.crypto = require('crypto-js');
    this.process = this.process.bind(this)
  }

  fireRequest(request, callback) {
    var url_details = this.getUrlCredentials(request.url_ref, request.encryptKey);

    // Build and send request
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          callback(xhr.response);
        }
    }

    xhr.open(request.verb, url_details.url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-API-KEY', url_details.api_key);
    xhr.send(JSON.stringify(request.data));
  }

  handleResponse(response){
    console.log('response: ', response);
  }

  getUrlCredentials(url_ref, encryptKey) {
    const credentials_map = {
      'clear-cut-api': 'U2FsdGVkX1/L14+jl21iokCdyiFj7NNQ82A/EYEtXz2o3Z31GTwpeW9p+1y176Dxv659QkYpbC7ZtrnEt2Dt1cFihVyqsXY0yVaNUogPj+Fzz1QTERZsUJdHXXUKLc91'
    };

    // See https://www.npmjs.com/package/crypto-js
    // Encrypt ----- remove comment block to encrypt anew -----
    /*
    var urlDetails = JSON.stringify({
      url: 'https://my-actual-url.com/example',
      api_key: '0123456789abcdef'
    });
    var encryptedDetails = this.crypto.AES.encrypt(urlDetails, encryptKey).toString();
    */

    // Decrypt
    var bytes  = this.crypto.AES.decrypt(credentials_map[url_ref], encryptKey);
    return JSON.parse(bytes.toString(this.crypto.enc.Utf8));
  }

  process(data) {
    if (this.type === 'process-clear-cut') {
      var request_data = {
        image: data.file
      };

      this.fireRequest({
          data: request_data,
          encryptKey: data.password,
          url_ref: 'clear-cut-api',
          verb: 'POST'
        },
        this.handleResponse
      );
      return
    }

    console.log('Handler type of ', this.type, ' is not handled.');
  }
}