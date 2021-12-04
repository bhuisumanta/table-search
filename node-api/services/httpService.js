var https = require('https');

function httpGet(url) {
  return new Promise((resolve, reject) => {
    try {
      https.get(url, res => {
        let data = [];

        res.on('data', chunk => {
          data.push(chunk);
        });

        res.on('end', () => {
          const users = JSON.parse(Buffer.concat(data).toString());
          resolve({
            data: users,
            status: res.statusCode,
            headers: res.headers
          });
        });
      }).on('error', error => {
        reject(error);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = { httpGet }