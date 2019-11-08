const express = require('express');

const ProjectsRouter = require('./projects/project-router.js');
const ResourcesRouter = require('./resources/resource-router.js');

const server = express();

server.use(express.json());
server.get('/', (req, res) => {
  res.status(200).json({
    message: `Hello from the Projects api`,
  });
});
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);

module.exports = server;
