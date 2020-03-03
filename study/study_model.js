const db = require('../data/dbConfig.js');
module.exports = {
  getStudyByUserId,
  get,
  getById,
  getBy,
  insert,
  update,
  remove,
};
function getStudyByUserId(id) {
  return db('study').where({ userid: id })
  }
function get() {
  return db('study');
}
function getById(id) {
  return db('study')
    .where({ id })
    .first();
}
function getBy(data) {
  return db('users')
    .where({ data })
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