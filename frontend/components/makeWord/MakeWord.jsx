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
  const [idx, setIdx] = useState(0);
  useEffect(()=>{
    const cles = Object.keys(jetons);
    setMyArray(cles);
  },[]);
  const handleClick=(idx)=>{
    setSelected(0);
    setIdx(idx);
    setMenuVisible(true);
  }
  useEffect(()=>{
    updateValue(idx, selected);
    // setSelected(null)
  },[selected, idx]);
  const updateValue=(index,newValue)=>{
    console.log("update");
      setLineArray(prev =>
          prev.map((item,i)=> i === index ? newValue: item)
        );
      };
  return(
    <div>
      <CharsInput lineArray={lineArray} setLineArray={setLineArray} />
      <div className="menu-box">
      {lineArray && lineArray.map((el,idx)=>{
        return(
          <img key={idx} className="jeton" src={jetons[myArray[el]]} alt="||||" onClick={()=> handleClick(idx)}/>
        )
      })}
      </div>
      {menuVisible &&       
      <SelectJeton 
        setSelected={setSelected}
        myArray={myArray} 
        jetons={jetons} 
        setMenuVisible={setMenuVisible}/>}
    </div>
  )  
}
export default MakeWord;
  