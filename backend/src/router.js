/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { 
  getAllWords, 
  getWordByInitial, 
  getWordByGroup, 
  getWordByFinale, 
  getWordByVisited, 
  addWord, 
  updateWord, 
  deleteWord,
} = require('./controllers/wordControllers.js');
const {
  getJetons,
  addJeton,
  deleteJeton
} = require('./controllers/jetonControllers.js');
// charger 
router.get("/", getAllWords);
//
router.post("/wordByInitial", getWordByInitial);
// 
router.post("/wordByGroup", getWordByGroup);
//
router.post("/wordByFinale",getWordByFinale);
// 
router.get("/wordByVisited", getWordByVisited);
// créer
router.post("/addWord", addWord);
// modifier
router.put("/updateWord/:idword", updateWord);
// supprimer
router.delete("/deleteWord/:idword", deleteWord);
// JETON
// charger
router.get("/jeton", getJetons);
// créer
router.post("/addJeton", addJeton);
// supprimer
router.delete("/deleteJeton/:idjeton", deleteJeton);

module.exports = router;
