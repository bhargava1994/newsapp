var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  res.send('this is login ...!!!');
});




module.exports = router;
