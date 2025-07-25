import { useEffect, useState } from "react";
import jetons from "../../../public/Jetons";
import SelectJeton from "../selectJeton/SelectJeton";
import CharsInput from "../charsInput/CharsInput";
import FindWord from "../findWord/FindWord";
import OKImg from "../../../public/elements_design/OK.png";
import "./makeword.css";
function MakeWord() {
  const [myArray, setMyArray] = useState([jetons]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [findVisible, setFindVisible] = useState(false);
  const [lineArray, setLineArray] = useState([]);
  const [idx, setIdx] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(()=>{
    const cles = Object.keys(jetons);
    setMyArray(cles);
  },[]);
  // select jeton a modifier index: idx
  const handleClick=(idx)=>{
    setActiveIndex(idx);
    setIdx(idx);
    setMenuVisible(true);
  }
  // lance la recherche
 const handleFind=()=>{
  let dot=lineArray.reduce((acc, el)=>{
      return acc= acc + el;
    })
  dot !== 0? setFindVisible(true):setFindVisible(false);
 }
  return(
    <div className="menu-wrapper">
      <CharsInput lineArray={lineArray} setLineArray={setLineArray} setFindVisible={setFindVisible}/>
      <div className="menu-box">
      {lineArray && lineArray.map((el,idx)=>{
        const isActive = idx === activeIndex;
        return(
          <img key={idx} className={`jeton ${isActive? 'active':''}`} src={jetons[myArray[el]]} alt="||||" onClick={()=> handleClick(idx)}/>
        )
      })}
      {lineArray.length>1 && <img className="btn-find" src={OKImg} alt="OK" onClick={handleFind}/>}
      </div>
      <div>
        {menuVisible &&       
        <SelectJeton 
          lineArray={lineArray}
          setLineArray={setLineArray}
          idx={idx}
          myArray={myArray} 
          jetons={jetons} 
          setMenuVisible={setMenuVisible}/>}
      </div>
      {findVisible && <FindWord lineArray={lineArray} myArray={myArray}/>}
    </div>
  )  
}
export default MakeWord;
  