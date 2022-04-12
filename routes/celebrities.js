const express = require('express');
const router = express.Router();

// Handle GET request for website root
router.get('/celebrities', (req, res, next) => {
  celebrity
    .find()
    .then(() => {
      res.render('/views/celebrities/index.hbs');
    })
    .catch((error) => {
      console.log('Error listing celebrities', error);
      next(error);
    });
});

module.exports = router;
