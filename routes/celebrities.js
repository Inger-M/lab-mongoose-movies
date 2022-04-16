const express = require('express');
const router = express.Router();
const celebrity = require('./../models/celebrity');

// Handle GET request for website root
//Iteration 2
router.get('/celebrities', (req, res, next) => {
  celebrity
    .find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      console.log('Error listing celebrities', error);
      next(error);
    });
});

//Iteration 4
router.get('/celebrities/create', (req, res, next) => {
  const { id } = req.params;
  celebrity
    .findById(id)
    .then((celebrity) => {
      console.log(celebrity);
      res.render('create', { celebrity });
    })
    .catch((error) => {
      console.log('Error creating a celebrity', error);
      next(error);
    });
});

//Iteration 3
router.get('/celebrities/:id', (req, res, next) => {
  const { id } = req.params;
  celebrity
    .findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      console.log('Error populating the celebrities page', error);
      next(error);
    });
});

// Iteration 4: POST route for celebrities
router.post('/celebrities/create', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  celebrity
    .create({ name, occupation, catchPhrase })
    .then((celebrity) => {
      res.redirect(`/celebrities/${celebrity._id}`);
    })
    .catch((error) => {
      res.render('create');
      console.log('There was an error creating the new celebrity.');
      next(error);
    });
});

//Iteration 5: deleting celebrities
router.post('/celebrities/:id/delete', (req, res, next) => {
  const { id } = req.params;
  celebrity
    .findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
