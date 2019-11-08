const db = require('../data/dbConfig.js');

const find = () => {
  return db('projects');
};

const addProject = async projectData => {
  try {
    const newProject = await db('projects').insert(projectData);
    const createdProject = await db('projects')
      .where('id', '=', newProject[0])
      .first();
    return createdProject;
  } catch (error) {
    return error;
  }
};

module.exports = {
  find,
  addProject,
};
