const express = require('express');
const router = express.Router();
const {getTransactions, addTransaction, deleteTransaction} = require('../controllers/transaction');
const {getGoals, AddGoal, checkGoal, deleteGoal } = require('../controllers/Goals');
const {addAccount, checkAccount, updateAccount, deleteAccount, getAccounts} = require('../controllers/Accounts');
const {logIn, Register, Changepswd, getUsers} = require('../controllers/Auth')
const { forwardAuthenticated } = require('../config/auth');


////////////////////accounts routes/////////////////
router.post('/accounts', addAccount);
router.get('/accounts/:id', checkAccount);
router.post('/upadateaccount/:id', updateAccount);
router.delete('/accounts/:id', deleteAccount);
router.get('/accounts', getAccounts);

//transactions routes

router.get('/transactions', getTransactions);
router.post('/transctions', addTransaction);
router.delete('/transaction/:id', deleteTransaction);

//goals routes
router.post('./goals', AddGoal);
router.get('/goals', getGoals);
router.get('goals/:id', checkGoal);
router.delete('goals/:id', deleteGoal);

///////////////////////////authentification routes//////////////
router.post('/login', forwardAuthenticated, logIn);
router.post('/register', Register);
router.post('/changepswd', Changepswd);
router.get('/users', getUsers);


module.exports = router;