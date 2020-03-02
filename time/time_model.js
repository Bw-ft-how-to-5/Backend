const db = require('../data/dbConfig.js');
module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};
function get() {
  return db('time');
}
function getById(id) {
  return db('time')
    .where({ id })
    .first();
}
function insert(time) {
  return db('time')
    .insert(time)
    .then(ids => {
      return getById(ids[0]);
    });
}
function update(id, changes) {
  return db('time')
    .where({ id })
    .update(changes);
}
function remove(id) {
  return db('time')
    .where('id', id)
    .del();
}