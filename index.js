const app = require('./lib/server');

app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`);
});
