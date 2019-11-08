exports.seed = function(knex) {
  // Inserts seed entries
  return knex('tasks').insert([
    { description: 'Prepare apartment for movers', project_id: 2 },
    { description: 'Pack clothes', project_id: 2 },
    { description: 'pack office', project_id: 2 },
    { description: 'move office', project_id: 2 },
    { description: 'pack kitchen', project_id: 2 },
    { description: 'move kitchen', project_id: 2 },
    { description: 'remove clothes', project_id: 3 },
    { description: 'take out drawers', project_id: 3 },
    { description: 'detatch bottom', project_id: 3 },
    { description: 'detatch backplate', project_id: 3 },
    { description: 'remove from closet', project_id: 3 },
    { description: 'define entities', project_id: 4 },
    { description: 'define entity relationships', project_id: 4 },
    { description: 'design data model', project_id: 4 },
    { description: 'build db', project_id: 4 },
    { description: 'test validity of data model', project_id: 4 },
    { description: 'seed db', project_id: 4 },
    { description: 'define expected user behaviors', project_id: 4 },
    { description: 'build routes based on user behaviors', project_id: 4 },
    { description: 'design ux', project_id: 4 },
    { description: 'design ui', project_id: 4 },
    { description: 'implement ux', project_id: 4 },
    { description: 'decorate data with ui components', project_id: 4 },
    { description: 'attach desktop to legs with glue', project_id: 1 },
  ]);
};
