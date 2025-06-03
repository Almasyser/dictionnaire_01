require ('dotenv').config();

const cors = require('cors');
// create express app
const express =require('express');
const router = require('./router');
const app = express();


// use some application-level middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // eslint-disable-next-line no-undef
    origin: process.env.REACT_APP_FRONTEND_URL,
    optionsSuccessStatus: 200,
  })
);
// eslint-disable-next-line no-undef
console.log("Frontend origin",process.env.REACT_APP_FRONTEND_URL);

// import and mount the API routes
app.use(router);
// ready to export
module.exports = app;
