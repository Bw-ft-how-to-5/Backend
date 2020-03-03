const express = require('express');
const Time = require('./time_model.js');
const router = express.Router();
router.get('/', (req, res) => {
    Time.get()
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
router.post('/', (req, res) => {
    const times = req.body;
    Time.insert(times)
    .then(times => {
        res.status(201).json(times)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
});
router.put('/:id', (req, res) => {
    const times = req.body;
    const id = req.params.id;
    Users.update(id, times)
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