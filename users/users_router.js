const express = require('express');
const Users = require('./users_model.js');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');//install npm i jsonwebtoken
const {jwtSecret} = require('../config/secrets.js');
const auth = require('../auth/restricted_middleware.js');

router.post("/register", (req, res) => {
    let userData = req.body;
    const hash = bcrypt.hashSync(userData.password, 12);
    userData.password = hash;
  
    Users.insert(userData)
      .then(user => {
        const token = generateToken(user);
        res.status(200).json({
          message: `Thanks for registering, ${userData.username}!`,
          user,
          token: token
        });
      })
      .catch(err => {
        res.status(500).json({ Error: "failed to retrieve database", err });
      });
  });
  
  router.post("/login", (req, res) => {
    const { username, password } = req.body;
    Users.getBy( username )
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res
            .status(200)
            .json({ message: `Welcome back, ${username}`, user, token: token });
        } else {
          res.status(401).json({ message: "invalid username/password" });
        }
      })
      .catch(err => {
        res.status(500).json({ Error: "failed to retrieve database", err });
      });
  });


router.get('/', auth, (req, res) => {
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
router.get('/:id', auth, (req, res) => {
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

router.put('/:id', auth, (req, res) => {
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
router.get('/study/:id', auth, (req, res) => {
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
router.get('/time/:id', auth, (req, res) => {
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

router.delete('/:id', auth, (req, res) => {
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

  function generateToken(user) {
    const payload = {
      userId: user.id,
      username: user.username
    };
    const options = {
      expiresIn: "8h"
    };
    const token = jwt.sign(payload, secret.jwtSecret, options);
    return token;
  }
module.exports = router;