const express = require('express');
const router = express.Router();
const {getGoals, addGoal, checkGoal, deleteGoal } = require('../controllers/transaction');

router.post('/goals', function(res, req){
    addGoal
});
router.get('/goals', function(res, req){ getGoals});
router.get('goals/:id', function (res, req){checkGoal});
router.delete('goals/:id', function(res, req){ deleteGoal});

///////////////////////////authentification routes//////////////
router.post('/login', function(res, req){logIn});
router.post('/register', function(res, req){Register});
router.post('/changepswd', function(res, req){Changepswd});


module.exports = router;