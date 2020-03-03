const jwt = require('jsonwebtoken');//install npm i jsonwebtoken
const { jwtSecret} = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (authorization) {
    jwt.verify(authorization, secret, (err, decodedToken)=>{
      if (err) {
        res.status(401).json({ message: 'Invalid Credentials' });
        
      } else {
        req.decodedToken = decodeToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};