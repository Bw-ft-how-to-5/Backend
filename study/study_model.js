const db = require('../data/dbConfig.js');
module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};
function get() {
  return db('study');
}
function getById(id) {
  return db('study')
    .where({ id })
    .first();
}
function insert(study) {
  return db('study')
    .insert(study)
    .then(ids => {
      return getById(ids[0]);
    });
}
function update(id, changes) {
  return db('study')
    .where({ id })
    .update(changes);
}
function remove(id) {
  return db('study')
    .where('id', id)
    .del();
}