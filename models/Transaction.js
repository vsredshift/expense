const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema ({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Add a positive or negative number']
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model('Transaction', TransactionSchema);