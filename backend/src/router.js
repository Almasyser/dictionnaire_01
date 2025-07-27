/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { 
  getAllWords, 
  getWordByGroup, 
  getWordByVisited, 
  addWord, 
  updateWord, 
  deleteWord,
} = require('./controllers/wordControllers.js');

// charger 
router.get("/", getAllWords);
// 
router.post("/wordByGroup", getWordByGroup);
// 
router.get("/wordByVisited", getWordByVisited);
// créer
router.post("/addWord", addWord);
// modifier
router.put("/updateWord/:idword", updateWord);
// supprimer
router.delete("/deleteWord/:idword", deleteWord);

module.exports = router;
