import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import './findword.css';

function FindWord({ lineArray, myArray}) {
  const [listWords, setListWords] = useState([]);
  const [flagErr, setFlagErr] = useState(false);
  const len = lineArray.length;
  const chemin = 'http://localhost:5050/';
  // 🧠 Calcule regx à partir de lineArray et myArray
  const regx = useMemo(() => {
    if (!lineArray || !myArray) return '';
    const modelFind = lineArray.map(el => (el === 0 ? '_' : myArray[el]));
    return modelFind.join('');
  }, [lineArray, myArray]);

  // ✅ fetch uniquement quand regx, chemin, ou len changent
  useEffect(() => {
    if (regx && chemin && len ) {
      const fetchList = async () => {
        try {
          const list = await HandleFetch(chemin, regx, len);
          setListWords(list);
        } catch  {
          // console.error('Erreur fetch:', error);
          setFlagErr(true);
        }
      };
      fetchList();
    }
  }, [regx, chemin, len]);

  async function HandleFetch(chemin, regx, len) {
    try {
      const response = await axios.post(
        `${chemin}wordByGroup`,
        { caps: regx, len: len },
        { headers: { 'Content-Type': 'application/json' } } // ✅ corrigé ici
      );
      return response.data;
    } catch (err) {
      console.log('Erreur axios:');
      throw err;
    }
  }
  return (
    <div className="dico-container">
      <div className="dico-title">{flagErr? "Aucun mot trouvé":`${listWords.length} mots trouvés.`}</div>
      <ul className="list-box">
        {listWords.map((el, index) => (
          <li className="list-line" key={index}>
            {el.word}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FindWord;
