import axios from 'axios';
import { useState } from 'react';
import "./findword.css";
function FindWord(){
  const [listWords, setListeWords] = useState([]);
  const [choice, setChoice] = useState('a');
  const [len, setLen] = useState('7');
  const [chemin] = useState("http://localhost:5050/");
  const [actionList] = useState([
    {name:"wordByInitial", label:"Lettre initiale"},
    {name:"wordByGroup", label:"Tout le mot"},
    {name:"wordByFinale", label:"Lettre finale"}
    ]);  
  const [action, setAction] = useState("wordByInitial"); 
  const handleInitial = async ()=>{
    try {
      const response = await axios.post(`${chemin}${action}`, { caps: choice, len: len},
        {header:{"Content-Type": "application/json"}}
      );
      setListeWords(response.data);
    }
    catch(err) {
    console.error(err);
    };
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    choice && len && handleInitial();
  }
  const handleAction = (e)=>{
    setAction(e.target.value);
  }
  const handleCancel = ()=>{
    setChoice('a');
    setLen(5);
    setAction(actionList[1]);
  }
  return(
    <div className='dico-container'>
      <section className='dico-box'>
        <div className='sub-title'>Recherche le mot</div>
        <div className='dico-actionlist'>
          {actionList.map((el)=>{
            return(
              <button 
                key={el.name} 
                type="radio" 
                name="btnAction" 
                value={el.name}
                onClick={handleAction}
                className={(action === el.name)? "btnRadio on":"btnRadio"}
              >{el.label}</button>
            )
          })}
        </div>
        <form className='dico-form'>
          <input type="text" value={choice} onChange={(e)=> setChoice(e.target.value)} />
          <input type="text" value={len} onChange={(e)=> setLen(parseInt(e.target.value, 10))} />
          <button className="btn cancel" type="button" onClick={handleCancel}>↺</button>
          <button className="btn submit" onClick={handleSubmit}>✓</button>
        </form>
      </section>
      <div className='dico-list'>{listWords.length} mots trouvés.</div>
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
