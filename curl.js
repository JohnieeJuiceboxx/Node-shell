/* eslint-disable handle-callback-err */
const request = require('request');

module.exports = (url) => {
    request(url, function(error, response, body){
        process.stdout.write(body);
    });
    process.stdout.write('\nprompt >');
};
