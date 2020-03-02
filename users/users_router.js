const express = require('express');
const Users = require('./users_model.js');
const router = express.Router();
router.get('/', (req, res) => {
    Users.get()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
});
router.post('/', (req, res) => {
    const user = req.body;
    Users.insert(user)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
});
router.put('/:id', (req, res) => {
    const user = req.body;
    const id = req.params.id;
    Users.update(id, user)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
});
router.get('/study/:id', (req, res) => {
    const id = req.params.id;
    Users.getUserStudy(id)
    .then(studies => {
        res.status(200).json(studies)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
});
router.get('/time/:id', (req, res) => {
    const id = req.params.id;
    Users.getUserTime(id)
    .then(times => {
        res.status(200).json(times)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
});

module.exports = router;