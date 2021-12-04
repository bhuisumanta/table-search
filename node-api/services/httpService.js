var https = require('https');

function httpGet(url) {
  return new Promise((resolve, reject) => {
    try {
      https.get(url, res => {
        let data = [];
        console.log('Status Code:', res.statusCode);
        console.log('Date in Response header:', JSON.stringify(res.headers));

        res.on('data', chunk => {
          data.push(chunk);
        });

        res.on('end', () => {
          console.log('Response ended: ');
          const users = JSON.parse(Buffer.concat(data).toString());
          resolve({
            data: users,
            status: res.statusCode,
            headers: res.headers
          });
        });
      }).on('error', error => {
        console.log('Error: ', err.message);
        reject(error);
      });
    } catch (error) {
      console.log('Catch block: ');
      reject(error);
    }
  });
}

module.exports = { httpGet }