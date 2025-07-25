import { useEffect, useState } from "react";
import "./charsinput.css";
import plusImg from "../../../public/elements_design/plus.png";
import moinsImg from "../../../public/elements_design/moins.png";
function CharInput(props){
  const {setLineArray} = props;
  const [nbrChars, setNbrChars] = useState(2);
  useEffect(()=>{
    const line_array = Array(nbrChars).fill(0);
    console.log("line_array",line_array);
    
    line_array && setLineArray(line_array);
  },[nbrChars, setLineArray])
  const handleChange=(e)=>{
    const nbrChar =parseInt(e.target.value);
    nbrChar && setNbrChars(nbrChar);
  }

  return(
    <div className="input-container">
      <h4>Taille du mot</h4>
      <div className="input-box">
        <img className="img-moins"src={moinsImg} onClick={()=>setNbrChars((nbrChars<=2)? 2 :nbrChars-1)}/>
        <input type='text' onChange={handleChange} value={nbrChars}></input>
        <img className="img-plus"src={plusImg} onClick={()=>setNbrChars((nbrChars>=15)? 15 : nbrChars+1)}/>
      </div>
    </div>
  )
}
export default CharInput;