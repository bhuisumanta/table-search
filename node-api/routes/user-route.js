var express    = require('express');
var userModel = require('../models/user-model');

var router = express.Router();

router.get('/', userModel.fetchUserList);

module.exports = router;
