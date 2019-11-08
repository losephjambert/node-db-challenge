exports.up = function(knex) {
  return (
    knex.schema

      // projects table
      .createTable('projects', table => {
        table.increments();
        table.string('name', 255).notNullable();
        table.string('description', 800);
        table.boolean('completed').defaultTo(0);
      })

      // tasks table
      .createTable('tasks', table => {
        table.increments();
        table.string('description', 255).notNullable();
        table.string('notes', 500);
        table.boolean('completed').defaultTo(0);
        // foreign key to project id
        table
          .integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })

      // resources table
      .createTable('resources', table => {
        table.increments();
        table
          .string('name', 255)
          .notNullable()
          .unique();
        table.text('descrption', 500).notNullable();
      })

      // project_resources table
      .createTable('project_resources', table => {
        table.increments();

        // foreign key to project id
        table
          .integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');

        // foregin key to resource id
        table
          .integer('resource_id')
          .unsigned()
          .references('id')
          .inTable('resources')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources');
};
