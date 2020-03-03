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
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Time.getById(id)
    .then(time => {
        res.status(200).json(time)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
});
router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    Time.getTimeByUserId(id)
    .then(study => {
        res.status(200).json(study)
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
    Time.update(id, times)
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

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Time.remove(id)
      .then(deleted => {
        res.status(200).json({ message: 'User has been successfully deleted.' })
      })
      .catch(err => {
        console.log('error in delete', err)
        res.status(500).json({ errorMessage: 'The post could not be removed.' })
      })
    
});


module.exports = router;