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
  deleteWord 
} = require('./controllers/wordControllers.js');

// afficher 
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

module.exports = router;
