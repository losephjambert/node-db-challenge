const db = require('../data/dbConfig.js');

const find = () => {
  return db('resources');
};

const addResource = async resourceData => {
  try {
    const newResource = await db('resources').insert(resourceData);
    const createdResource = await db('resources')
      .where('id', '=', newResource[0])
      .first();
    return createdResource;
  } catch (error) {
    return error;
  }
};

module.exports = {
  find,
  addResource,
};
