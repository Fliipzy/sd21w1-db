
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('creator').del()
    .then(function () {
      // Inserts seed entries
      return knex('creator').insert([
        {id: 1, name: 'CD Projekt S.A'},
        {id: 2, name: 'Rockstar Games'},
        {id: 3, name: 'Warhorse Studios'},
        {id: 4, name: 'Frank Darabont'},
        {id: 5, name: 'Philip K. Dick'},
        {id: 6, name: 'Luc Perkins'},
        {id: 7, name: 'Eric Redmond'},
        {id: 8, name: 'Jim Wilson'},
        {id: 9, name: 'Joel Murach'},
        {id: 10, name: 'Nihal Mehta'},
        {id: 11, name: 'Robert C. Martin'},
        {id: 12, name: 'Brian W. Kernighan'},
        {id: 13, name: 'Dennis M. Ritchie'},
        {id: 14, name: 'Andy Hunt'},
        {id: 15, name: 'Dave Thomas'},
        {id: 16, name: 'Bjarne Stroustrup'},
        {id: 17, name: 'Luke Scott'},
        {id: 18, name: 'Denis Villeneuve'},
        {id: 19, name: 'Ridley Scott'},
        {id: 20, name: 'Shinichirō Watanabe'},
        {id: 21, name: 'Paul Thomas Anderson'},
        {id: 22, name: 'Mary Harron'},
        {id: 23, name: 'Quentin Tarantino'},
        {id: 24, name: 'Robert Zemeckis'},
        {id: 25, name: 'Martin Scorsese'},
        {id: 26, name: 'Lilly Wachowski'},
        {id: 27, name: 'Lana Wachowski'},
        {id: 28, name: 'Hayao Miyazaki'},
        {id: 29, name: 'Tony Kaye'},
        {id: 30, name: 'Christopher Nolan'},
        {id: 31, name: 'Bong Joon Ho'},
        {id: 32, name: 'Todd Phillips'},
        {id: 33, name: 'Chad Stahelski'},
        {id: 34, name: 'Remedy Entertainment'},
        {id: 35, name: 'More'},
        {id: 36, name: 'Activision'},
        {id: 37, name: 'Harper Lee'}
      ]);
    });
};
