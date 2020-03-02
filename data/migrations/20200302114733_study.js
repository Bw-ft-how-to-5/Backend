exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments();

      users
        .string("username", 255)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
    })
    .createTable("study", study => {
      study.increments();
      study
        .integer("userid")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      study.string("title", 255).notNullable();
      study.string("description", 800).notNullable();
    })
    .createTable("time", time => {
      time.increments();
      time
        .integer("userid")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      time.string("title", 255).notNullable();
      time.string("description", 800).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("study")
    .dropTableIfExists("time");
};
