const express = require('express');
const Study = require('./study_model.js');
const router = express.Router();
router.get('/', (req, res) => {
    Study.get()
    .then(studys => {
        res.status(200).json(studys)
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
    Study.getById(id)
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
    const study = req.body;
    Study.insert(study)
    .then(study => {
        res.status(201).json(study)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
});
router.put('/:id', (req, res) => {
    const study = req.body;
    const id = req.params.id;
    Study.update(id, study)
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

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Study.remove(id)
      .then(deleted => {
        res.status(200).json({ message: 'User has been successfully deleted.' })
      })
      .catch(err => {
        console.log('error in delete', err)
        res.status(500).json({ errorMessage: 'The post could not be removed.' })
      })
    
});


module.exports = router;