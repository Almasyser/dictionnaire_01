/* eslint-disable no-undef */
const models = require('../models');
const jetonManager = models.jeton
const getJetons = (req, res) => {
  jetonManager
    .findAll()
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.sendStatus(500);
    });
};
const addJeton = (req, res) => {
  const {jeton} = req.body;
  if(!jeton){
    return res.status(400).send("Mot requis");
  }
  jetonManager
    .addJeton(jeton)
    .then(([rows]) => {
      if (rows.affectedRows) {
        res.status(201).send(rows);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      if (err.code === "ER_DUP_ENTRY") {
        res.sendStatus(409);
      } else {
        console.error(err);
        res.sendStatus(500);
      }
    });
};
const deleteJeton = (req, res) => {
  const Id = parseInt(req.params.idjeton, 10);
  jetonManager
    .delete(Id)
    .then(([rows]) => {
      if (rows) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getJetons,
  addJeton,
  deleteJeton  
};
