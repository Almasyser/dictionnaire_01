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
    {name:"wordByGroup", label:"Ailleurs dans le mot"},
    {name:"wordByFinale", label:"Lettre finale"}
    ]);  
  const [action, setAction] = useState("wordByInitial"); 
  const handleInitial = async ()=>{
    try {
      const response = await axios.post(`${chemin}${action}`, { caps: choice, len: len},
        {header:{"Content-Type": "application/json"}}
      );
      console.log(response.data);
      setListeWords(response.data);
    }
    catch(err) {
    console.error(err);
    };
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("===>",choice," ",typeof(choice)," -- ",len," ",typeof(len));
    
  }
  const handleAction = (e)=>{
    setAction(e.target.value);
    console.log("change",e.target.value);
    
  }
  return(
    <>
      <div>Find word</div>
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
      <form>
        <input type="text" value={choice} onChange={(e)=> setChoice(e.target.value)} />
        <input type="number" value={len} onChange={(e)=> setLen(parseInt(e.target.value, 10))} />
        <button onClick={handleSubmit}>submit</button>
      </form>
      <div>{choice}{len}</div>
      <button type="button" onClick={handleInitial}>tester</button>
      <div>{listWords.length}</div>
      <ul>
        {listWords && listWords.map((el,index)=>{
          return(
            <li key={index}>{el.word}</li>
          )
        })}
      </ul>
    </>
  )
}
export default FindWord;
