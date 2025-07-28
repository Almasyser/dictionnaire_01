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
  const [gameVisible, setGameVisible] = useState(false);
  const [findVisible, setFindVisible] = useState(false);
  const [myGameVisible, setyGameVisible] = useState(false);
  // chaine recherchée, consomée par find
  const [lineArray, setLineArray] = useState([]);
  // chaine myGame 
  const [myGameArray, setMyGameArray] = useState([]);
  const [idx, setIdx] = useState(0);
  const [idg, setIdg] = useState(0);
  useEffect(()=>{
    const cles = Object.keys(jetons);
    setMyArray(cles);
    const temp = Array(7).fill(0);
    setMyGameArray(temp);
  },[]);
  lineArray && myGameArray && console.log("***",lineArray," ",myGameArray," - ",idx," " ,idg);
  
  const handleMyGame=()=>{
    setyGameVisible(!myGameVisible);
  }
  const handleClickGame=(index)=>{
    setIdg(index);
    // setGameActiveIndex(index);
    setGameVisible(true);
  }
  // select jeton a modifier index: idx
  const handleClick=(index)=>{
    setIdx(index);
    // setActiveIndex(index);
    setMenuVisible(true);
  }
  // lance la recherche
  const handleFind=()=>{
    let dot=(lineArray.reduce((acc, el)=>{
     return acc= acc + el;
    }))
    dot !== 0? setFindVisible(true):setFindVisible(false);
 }
  return(
    <>
      <button className="btn-mygame" onClick={handleMyGame}>mon tirage</button>
      <div className="mygame-wrapper">
        {myGameVisible && myGameArray.map((el,index)=>{
          const isActive = index === idg; 
          return(
            <img key={index} className={`jetongame ${isActive? 'activegame':''}`} src={jetons[myArray[el]]} alt="||||" onClick={()=> handleClickGame(index)}/>
          )
        })}
      </div>
      {gameVisible &&
        <SelectJeton
          updateArray={setMyGameArray}
          id={idg}
          myArray={myArray} 
          jetons={jetons} 
          setVisible={setGameVisible}/>
      }
    <div className="menu-wrapper">
      <CharsInput lineArray={lineArray} setLineArray={setLineArray} setFindVisible={setFindVisible}/>
      <div className="menu-box">
      {lineArray && lineArray.map((el,index)=>{
        const isActive = index === idx;
        return(
          <img key={index} className={`jeton ${isActive? 'active':''}`} src={jetons[myArray[el]]} alt="||||" onClick={()=> handleClick(index)}/>
        )
      })}
      {lineArray.length>1 && <img className="btn-find" src={OKImg} alt="OK" onClick={handleFind}/>}
      </div>
      <div>
        {menuVisible &&       
        <SelectJeton 
          updateArray={setLineArray}
          id={idx}
          myArray={myArray} 
          jetons={jetons} 
          setVisible={setMenuVisible}/>}
      </div>
      {findVisible && <FindWord lineArray={lineArray} myArray={myArray} />}
    </div>
    </>
  )  
}
export default MakeWord;
  