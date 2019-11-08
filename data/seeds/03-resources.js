exports.seed = function(knex) {
  // Inserts seed entries
  return knex('resources').insert([
    { name: 'hammer' }, // 1
    { name: 'mover' }, // 2
    { name: 'cardboard box' }, // 3
    { name: 'electric drill' }, // 4
    { name: 'screwdriver' }, // 5
    { name: 'dolly' }, // 6
    { name: 'computer' }, // 7
    { name: 'vehicle' }, // 8
  ]);
};
