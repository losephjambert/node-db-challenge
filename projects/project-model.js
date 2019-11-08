const db = require('../data/dbConfig.js');

const find = () => {
  return db('projects');
};

module.exports = {
  find,
};
