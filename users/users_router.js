const express = require('express');
const Users = require('./users_model.js');
const router = express.Router();
const jwt = require('jsonwebtoken');//install npm i jsonwebtoken
const {jwtSecret} = require('../config/secrets.js');
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
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Users.getById(id)
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

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Users.remove(id)
      .then(deleted => {
        res.status(200).json({ message: 'User has been successfully deleted.' })
      })
      .catch(err => {
        console.log('error in delete', err)
        res.status(500).json({ errorMessage: 'The post could not be removed.' })
      })
    
});
function generateToken(user){
    const payload = {
      username: user.username,
    };
    const secret = process.env.JWT_SECRET || "is it secret, or is it safe";
    const options = {
      expiresIn: '1h'
    };
    return jwt.sign(payload, jwtSecret, options)
  }
module.exports = router;