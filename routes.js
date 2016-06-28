const express = require('express');
const router = express.Router();
const exchange = require('./lib/exchange');

router.get('/', (req, res) => {
  console.log(req.query);
  res.render('index', { rates: ['GBP', 'JPY', 'USD']});
});

module.exports = router;
