const db = require('../data/dbConfig.js');

const find = () => {
  return db('projects');
};

const findById = async id => {
  try {
    const project = await db('projects')
      .where('id', '=', id)
      .first();
    if (!project) return null;
    else return project;
  } catch (error) {
    return error;
  }
};

const findTasks = async id => {
  try {
    const tasks = await db('projects')
      .join('tasks', 'tasks.project_id', '=', 'projects.id')
      .where('projects.id', '=', id)
      .select(
        'tasks.id',
        'tasks.description as task_description',
        'projects.name as project_name',
        'projects.description as project_description'
      );
    console.log(tasks);
    return tasks;
  } catch (error) {
    return error;
  }
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
  findById,
  findTasks,
  addProject,
};
