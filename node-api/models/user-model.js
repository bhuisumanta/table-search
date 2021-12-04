var httpGet = require('../services/httpService').httpGet;

function fetchUserList(req, res) {
  httpGet('https://jsonplaceholder.typicode.com/users')
    .then(data => {
      if (data && data.data) {
        res.status(data.status).json(data.data);
      } else {
        throw 'Data not present';
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
}

module.exports = { fetchUserList };