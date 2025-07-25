import axios from 'axios';
import { useState } from 'react';
import "./findword.css";
function FindWord({lineArray, myArray}){
  console.log("useeffect");
  const [listWords, setListeWords] = useState([]);
  const len = lineArray.length;
  const chemin = "http://localhost:5050/";
  let modelFind;
  if(lineArray){
    modelFind = lineArray.map((el)=> (el===0 ? '_':myArray[el]))
  }
  const temp = modelFind.join('');
  const regx=`${temp}`;
  if(regx){
    handleFetch(regx);
    }
  async function handleFetch(regx) {
    try {
    const response = await axios.post(`${chemin}wordByGroup`, { caps: regx, len: len},
      {header:{"Content-Type": "application/json"}}
    );
    setListeWords(response.data);
    }
    catch(err) {
    console.error(err);
      };
    }
  return(
    <div className='dico-container'>
      <div className='dico-title'>{listWords.length} mots trouvés.</div>
      <ul className='list-box'>
        {listWords && listWords.map((el,index)=>{
          return(
            <li className="list-line" key={index}>{el.word}</li>
          )
        })}
      </ul>
    </div>
  )
}
export default FindWord;
