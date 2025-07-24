import axios from 'axios';
import { useState, useEffect } from 'react';
import "./findword.css";
import { data } from 'react-router-dom';
function FindWord({array, myArray}){
  const [modelFind, setModelFind] = useState([]);
  const [listWords, setListeWords] = useState([]);
  const [len] = useState(array.length);
  const [chemin] = useState("http://localhost:5050/");
  useEffect(()=>{
      setModelFind([]);
      array.map((el)=> {
        setModelFind((prev)=>
          [...prev,(el===0? '_':myArray[el])]
        )
      });
      handleInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[myArray, array])
  const temp = modelFind.join('');
  const regexFind=`${temp}`;
  const handleInitial = async ()=>{
    try {
      const response = await axios.post(`${chemin}wordByGroup`, { caps: regexFind, len: len},
        {header:{"Content-Type": "application/json"}}
      );
      setListeWords(response.data);
      console.log("data ",data);
      
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
