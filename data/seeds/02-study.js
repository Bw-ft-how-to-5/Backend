
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('study').insert([
        {id: 1, userid: 1, title: 'How to migrate on node.js part1', description: 'You will figure out when you see this data set...'},
        {id: 2, userid: 2, title: 'How to migrate on node.js part2', description: 'You will figure out when you see this data set...'},
        {id: 3, userid: 3, title: 'How to migrate on node.js part3', description: 'You will figure out when you see this data set...'}
      ]);
};
