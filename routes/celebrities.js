const express = require('express');
const router = express.Router();
const celebrity = require('../models/celebrity');

// Handle GET request for website root
//Iteration 2
router.get('/celebrities', (req, res, next) => {
  celebrity
    .find()
    .then((celebrities) => {
      res.render('home', { celebrities });
    })
    .catch((error) => {
      console.log('Error listing celebrities', error);
      next(error);
    });
});

//Iteration 3
router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  celebrity
    .findById(id)
    .then((celebrity) => {
      res.render('/celebrities/show', { celebrity });
    })
    .catch((error) => {
      console.log('Error populating the celebrities page', error);
      next(error);
    });
});

//Iteration 4
router.get('/celebrities/create', (req, res, next) => {
  const { id } = req.params;
  celebrity
    .findById(id)
    .then((celebrity) => {
      res.render('/celebrities/create', { celebrity });
    })
    .catch((error) => {
      console.log('Error creating a celebrity', error);
      next(error);
    });
});

// Iteration 4: POST route for celebrities
app.post('/celebrities/create', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  celebrity
    .create({ name, occupation, catchPhrase })
    .then((creation) => {
      const id = celebrity._id;
      res.redirect('/celebrities/' + id);
      // It:4.6 this i where I am
    })
    .catch((error) => {
      console.log('There was an error creating the new celebrity.');
      next(error);
    });
});

module.exports = router;
