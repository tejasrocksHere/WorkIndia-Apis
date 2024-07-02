const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  User.createUser(username, hashedPassword, email, (err, result) => {
    if (err) throw err;
    res.status(200).json({ status: 'Account successfully created', status_code: 200, user_id: result.insertId });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.getUserByUsername(username, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      const user = results[0];
      if (bcrypt.compareSync(password, user.password)) {
        jwt.sign({ user }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
          res.status(200).json({ status: 'Login successful', status_code: 200, user_id: user.id, access_token: token });
        });
      } else {
        res.status(401).json({ status: 'Incorrect username/password provided. Please retry', status_code: 401 });
      }
    } else {
      res.status(401).json({ status: 'Incorrect username/password provided. Please retry', status_code: 401 });
    }
  });
};
