const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const transactions = require('./routes/transactions');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });
connectDB();

const app = express();

app.use(express.json);
app.use('/api/v1/transactions', transactions);
app.get('/', (req, res) => res.send("hello"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));