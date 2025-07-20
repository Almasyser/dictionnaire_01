import { useEffect, useState } from "react";
import jetons from "../../../public/Jetons";
import SelectJeton from "../selectJeton/SelectJeton";
// import "./makeword.css";
function MakeWord() {
  const [myArray, setMyArray] = useState([jetons]);
  const [selected, setSelected] = useState(jetons[0]);
  const [menuVisible, setMenuVisible] = useState(false);
    useEffect(()=>{
    const cles = Object.keys(jetons);
    setMyArray(cles);
  },[]);
  
  return(
    <div>
      <button type='button' onClick={()=>setMenuVisible(!menuVisible)}>afficher</button>
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
  