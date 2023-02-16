const express = require('express');
const router = express.Router();
const {getTransactions,addTransaction,removeTransaction} = require('../controllers/transactions');

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .delete(removeTransaction);

module.exports = router;