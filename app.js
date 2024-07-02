const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const db = require('mysql').createConnection(config.mysqlConfig);

const userController = require('./controller/userController');
const shortController = require('./controller/shortController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.post('/api/signup', userController.signup);
app.post('/api/login', userController.login);
app.post('/api/shorts/create', shortController.createShort);
app.get('/api/shorts', shortController.getAllShorts);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});