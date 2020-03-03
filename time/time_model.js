const db = require('../data/dbConfig.js');
module.exports = {
  getTimeByUserId,
  get,
  getById,
  getBy,
  insert,
  update,
  remove,
};

function getTimeByUserId(id) {
  return db('time').where({ userid: id })
  }
function get() {
  return db('time');
}
function getById(id) {
  return db('time')
    .where({ id })
    .first();
}
function getBy(data) {
  return db('users')
    .where({ data })
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