import { useEffect, useState } from "react";
import jetons from "../../../public/Jetons";
import SelectJeton from "../selectJeton/SelectJeton";
import CharsInput from "../charsInput/CharsInput";
import "./makeword.css";
// import "./makeword.css";
function MakeWord() {
  const [myArray, setMyArray] = useState([jetons]);
  const [selected, setSelected] = useState(jetons[0]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [lineArray, setLineArray] = useState([]);
  useEffect(()=>{
    const cles = Object.keys(jetons);
    setMyArray(cles);
  },[]);

console.log("### ",lineArray);

  
  return(
    <div>
      <CharsInput lineArray={lineArray} setLineArray={setLineArray} />
      <button type='button' onClick={()=>setMenuVisible(!menuVisible)}>afficher</button>
      <div className="menu-box">
      {lineArray && lineArray.map((el,index)=>{
        return(
          <img key={index} className="jeton" src={jetons[myArray[el]]} alt="||||"/>
        )
      })}
      </div>
      {menuVisible &&       
      <SelectJeton 
        selected={selected} 
        setSelected={setSelected}
        myArray={myArray} 
        jetons={jetons} 
        setMenuVisible={setMenuVisible}/>}
    </div>
  )  
}
export default MakeWord;
  