exports.seed = function(knex) {
  // Inserts seed entries
  return knex('resources').insert([
    { name: 'hammer' },
    { name: 'mover' },
    { name: 'cardboard box' },
    { name: 'electric drill' },
    { name: 'screwdriver' },
    { name: 'dolly' },
    { name: 'computer' },
    { name: 'vehicle' },
  ]);
};
