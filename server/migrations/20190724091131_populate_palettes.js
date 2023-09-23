exports.up = function(knex) {
  return knex('palettes').insert({
    palettes: JSON.stringify([
      [
        { id: 0, red: 0, green: 0, blue: 0 },
        { id: 1, red: 0, green: 0, blue: 0 },
        { id: 2, red: 0, green: 0, blue: 0 },
        { id: 3, red: 0, green: 0, blue: 0 },
        { id: 4, red: 0, green: 0, blue: 0 }
      ]
    ])
  });
};

exports.down = function(knex) {
  return knex('palettes').delete();
};
