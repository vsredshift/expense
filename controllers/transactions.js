const Transaction = require('../models/Transaction');

//  @desc       Get all transactions
//  @route      GET /api/v1/transactions
//  @access     Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
          });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}


//  @desc       Add a transaction
//  @route      POST /api/v1/transactions
//  @access     Public
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);
    
        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        console.log(err);
    }
};


//  @desc       Delete all transactions
//  @route      DELETE /api/v1/transactions/:id
//  @access     Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction');
}   