const db = require('../data/dbConfig.js');

const find = async () => {
  const projects = await db('projects');
  return projects.map(project => {
    return {
      ...project,
      completed: project.completed ? true : false,
    };
  });
};

const findById = async id => {
  try {
    const project = await db('projects')
      .where('id', '=', id)
      .first();
    if (!project) return null;
    else {
      return {
        ...project,
        completed: project.completed ? true : false,
      };
    }
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
        'tasks.completed',
        'tasks.description as task_description',
        'projects.name as project_name',
        'projects.description as project_description'
      );
    return tasks.map(task => {
      return {
        ...task,
        completed: task.completed ? true : false,
      };
    });
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
    return {
      ...createdProject,
      completed: createdProject.completed ? true : false,
    };
  } catch (error) {
    return error;
  }
};

const addTask = async (taskData, projectId) => {
  const task = {
    ...taskData,
    project_id: projectId,
  };

  try {
    const insertTask = await db('tasks').insert(task);
    return insertTask;
  } catch (error) {
    return error;
  }
};

module.exports = {
  find,
  findById,
  findTasks,
  addProject,
  addTask,
};
