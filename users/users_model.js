const db = require('../data/dbConfig.js');
module.exports = {
  get,
  getById,
  getUserStudy,
  getUserTime,
  insert,
  update,
  remove,
};
function get() {
  return db('users');
}
function getById(id) {
  return db('users')
    .where({ id })
    .first();
}
function getUserStudy(userId) {
  return db('study as s')
    .join('users as u', 'u.id', 's.userid')
    .select('u.id', 's.id', 's.title', 's.description')
    .where('s.user_id', userId);
}
function getUserTime(userId) {
    return db('time as t')
      .join('users as u', 'u.id', 't.userid')
      .select('u.id', 't.id', 't.title', 't.description')
      .where('t.user_id', userId);
  }
function insert(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      return getById(ids[0]);
    });
}
function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}
function remove(id) {
  return db('users')
    .where('id', id)
    .del();
}