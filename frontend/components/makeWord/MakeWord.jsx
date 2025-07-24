import { useEffect, useState } from "react";
import jetons from "../../../public/Jetons";
import SelectJeton from "../selectJeton/SelectJeton";
import CharsInput from "../charsInput/CharsInput";
import FindWord from "../findWord/FindWord";
import "./makeword.css";
function MakeWord() {
  const [myArray, setMyArray] = useState([jetons]);
  const [selected, setSelected] = useState(jetons[0]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [findVisible, setFindVisible] = useState(false);
  const [lineArray, setLineArray] = useState([]);
  const [idx, setIdx] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(()=>{
    const cles = Object.keys(jetons);
    setMyArray(cles);
  },[]);
  const handleClick=(idx)=>{
    setActiveIndex(idx);
    setSelected(0);
    setIdx(idx);
    setMenuVisible(true);
  }
  useEffect(()=>{
    updateValue(idx, selected);
  },[selected, idx]);
  const updateValue=(index,newValue)=>{
      setLineArray(prev =>
          prev.map((item,i)=> i === index ? newValue: item)
        );
      };
  const handleFind=()=>{
    setMenuVisible(false)
    setFindVisible(true);
    }
  return(
    <div className="menu-wrapper">
      <CharsInput lineArray={lineArray} setLineArray={setLineArray} />
      <div className="menu-box">
      {lineArray && lineArray.map((el,idx)=>{
        const isActive = idx === activeIndex;
        return(
          <img key={idx} className={`jeton ${isActive? 'active':''}`} src={jetons[myArray[el]]} alt="||||" onClick={()=> handleClick(idx)}/>
        )
      })}
      {lineArray.length>1 && <button className="btn-find" onClick={handleFind}>?</button>}
      </div>
      {menuVisible &&       
      <SelectJeton 
        setSelected={setSelected}
        myArray={myArray} 
        jetons={jetons} 
        setMenuVisible={setMenuVisible}/>}
      {findVisible && 
      <FindWord array={lineArray} myArray={myArray}/>}
    </div>
  )  
}
export default MakeWord;
  