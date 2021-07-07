exports.seed = function(knex) {
  // Inserts seed entries
  return knex('projects').insert([
    { name: 'Build a desk' }, // 1
    { name: 'Move into new apartment' }, // 2
    {
      name: 'Disassemble dresser',
      description:
        'The only way to get the dresser out of the closet is to disassemble it, then remove it piecemeal.',
    }, //3
    { name: 'Build a grocery planning app' }, // 4
  ]);
};
