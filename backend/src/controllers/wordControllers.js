/* eslint-disable no-undef */
const models = require('../models');
const wordManager = models.words

const getAllWords = (req, res) => {
  wordManager
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

// word by group
const getWordByGroup = (req, res) => {
  const {caps, len} = req.body;
  if (!caps || !len || isNaN(len)) {
    return res.status(400).send("group est requis");
  }
  wordManager
  .findByGroup(caps,len)
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
const getWordByVisited = (req, res) => {
  wordManager
    .findByVisited()
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
const updateWord = (req, res) => {
  const Id = parseInt(req.params.idword, 10);
  const {el} = req.body;
  wordManager
    .update(Id, el)
    .then(([rows]) => {
      if (rows) {
        res.status(200).send(el);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const deleteWord = (req, res) => {
  const Id = parseInt(req.params.idword, 10);
  wordManager
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
const addWord = (req, res) => {
  const {word} = req.body;
  if(!word){
    return res.status(400).send("Mot requis");
  }
  wordManager
    .addWord(word)
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
module.exports = {
  getAllWords,
  getWordByGroup,
  getWordByVisited,
  updateWord,
  addWord,
  deleteWord  
};

