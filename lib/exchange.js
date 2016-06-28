const request = require('request');

const getRate = () => {
  return new Promise((resolve, reject) => {
    return request.get('http://api.fixer.io/latest?base=AUD', (err, res, body) => {
      if (err) return reject(err);
      return resolve(JSON.parse(body));
    });
  });
};

const amountToOther = (amount, symbol) => {
  return new Promise((resolve, reject) => {
    return request.get('http://api.fixer.io/latest?base=AUD', (err, res, body) => {
      if (err) return reject(err);
      const data = JSON.parse(body);
      const result = amount * data.rates[symbol];
      return resolve(result);
    });
  });
};

module.exports = {
  getRate: getRate,
  amountToOther: amountToOther
};
