

exports.seed = function(knex) {
      // Inserts seed entries
      return knex('time').insert([
        {id: 1, userid: 1, title: 'How to manage time part1', description: 'You will figure out when you see this data set...'},
        {id: 2, userid: 2, title: 'How to manage time part2', description: 'You will figure out when you see this data set...'},
        {id: 3, userid: 3, title: 'How to manage time part3', description: 'You will figure out when you see this data set...'}
      ]);
};

