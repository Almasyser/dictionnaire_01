/* eslint-disable no-undef */
require('dotenv').config();
const mysql = require('mysql2/promise');
// create a connection pool to the database
const { 
  REACT_APP_DB_HOST, 
  REACT_APP_DB_PORT, 
  REACT_APP_DB_USER, 
  REACT_APP_DB_PASSWORD, 
  REACT_APP_DB_NAME
 } = process.env;
const pool = mysql.createPool({
  host: REACT_APP_DB_HOST,
  port: REACT_APP_DB_PORT,
  user: REACT_APP_DB_USER,
  password: REACT_APP_DB_PASSWORD,
  database: REACT_APP_DB_NAME,
});
pool
  .getConnection()
  .then(()=>{
    console.log("database connectée");
  })
  .catch ((error)=>{
    console.warn("Warning:",error,"Failed to get a DB connection.");
});
const models = {};
const WordManagers = require('./worldManagers');
models.words = new WordManagers();
models.words.setDatabase(pool);
const JetonManagers = require('./jetonManagers');
models.jeton = new JetonManagers();
models.jeton.setDatabase(pool);

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);

