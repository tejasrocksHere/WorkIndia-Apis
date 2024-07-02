const db = require('../config').db;

class Short {
  static createShort(category, title, author, publish_date, content, actual_content_link, image, upvote, downvote, callback) {
    const query = 'INSERT INTO shorts (category, title, author, publish_date, content, actual_content_link, image, upvote, downvote) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [category, title, author, publish_date, content, actual_content_link, image, upvote, downvote], callback);
  }

  static getAllShorts(callback) {
    const query = 'SELECT * FROM shorts';
    db.query(query, callback);
  }
}

module.exports = Short;