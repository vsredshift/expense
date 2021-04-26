const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');


router
    .route('/api/v1/transactions')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('//api/v1/transactions/:id')
    .delete(deleteTransaction);

module.exports = router;