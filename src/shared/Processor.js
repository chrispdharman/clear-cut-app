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
      'clear-cut-api': 'U2FsdGVkX18xNs7jMxE5K68a7pvXAjSO991reGoTj+fzH68m2Igxd2qK981KQAWCRkDeFpsHSCpGKLA3PX5YD2eUf3FbdIDL0F/+JEeyChANLJOxmXL+K4IYMhv3QmTzMR04MIvwDQYKsfh5pwLtk8ZZM1h5UydGDkGGrSzcwTM3yWMOHOUM+5ejSj7gdq5i/R1oBZ4+BKHIgZzLlOdMbw=='
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