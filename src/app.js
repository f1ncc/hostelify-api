const express = require('express');
const morgan = require('morgan');

const hostelRouter = require('./routes/hostelRoutes');
const hostelerRouter = require('./routes/hostelerRoutes');

const app = express();

//Middleware for logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/hostels', hostelRouter);
app.use('/api/v1/hostelers', hostelerRouter);

module.exports = app;
