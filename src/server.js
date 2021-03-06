const express = require('express');
const bodyParser = require('body-parser');
const util = require('Wamble');
require('terminal-colors');

const app = express();

// Setting my port to be constant
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


// This is linking my routes
app.use('/api/v1', require('./routes/api/apps')(express));
app.use('/api/v1', require('./routes/api/users')(express));


const server = app.listen(port, () => {
  util.debug('server active on', port);
});

module.exports = server;
