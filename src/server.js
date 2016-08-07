const express = require('express');
const body_parser = require('body-parser');
const app = express();

// Setting my port to be constant
const port = 3000;

app.use(body_parser.json());

//This is linking my routes
app.use('/api/v1', require('./routes/apps.js')(express));
app.use('/api/v1', require('./routes/users.js')(express));


const server = app.listen(port,() => {
  console.log('server active on', port)
});

module.exports = server;
