const Short = require('../models/short');

exports.createShort = (req, res) => {
  const { category, title, author, publish_date, content, actual_content_link, image, votes } = req.body;

  Short.createShort(category, title, author, publish_date, content, actual_content_link, image, votes.upvote, votes.downvote, (err, result) => {
    if (err) throw err;
    res.status(200).json({ status: 'Short created successfully', status_code: 200, short_id: result.insertId });
  });
};

exports.getAllShorts = (req, res) => {
  Short.getAllShorts((err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
};
