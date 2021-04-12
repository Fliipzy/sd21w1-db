
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('game_console_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('game_console_type').insert([
        {id: 1, console: 'Playstation 4'},
        {id: 2, console: 'Playstation 5'},
        {id: 3, console: 'Xbox One'},
        {id: 4, console: 'Nintendo Switch'},
        {id: 5, console: 'PC'},
        {id: 6, console: 'Playstation 3'},
        {id: 7, console: 'Playstation 2'}
      ]);
    });
};
