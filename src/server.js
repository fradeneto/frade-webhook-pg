require('dotenv/config');
const http = require('http');
const app = require('./app');

const port = process.env.PORT || 0;

http.createServer(app).listen(port, () => {
  console.log(
    `Express server listening on port ${port} | NODE_ENV=${process.env.NODE_ENV}`
  );
});
