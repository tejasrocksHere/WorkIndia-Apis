const db = require('../config').db;

class User {
  static createUser(username, hashedPassword, email, callback) {
    const query = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, "admin")';
    db.query(query, [username, hashedPassword, email], callback);
  }

  static getUserByUsername(username, callback) {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], callback);
  }
}

module.exports = User;