import { useEffect, useState } from "react";
import "./charsinput.css";
function CharInput(props){
  const {setLineArray} = props;
  const [nbrChars, setNbrChars] = useState(0);
  useEffect(()=>{
    const line_array = Array(nbrChars).fill(0);
    line_array && setLineArray(line_array);
  },[nbrChars, setLineArray])
  const handleChange=(e)=>{
    const nbrChar =parseInt(e.target.value);
    nbrChar && setNbrChars(nbrChar);
  }
    
  return(
    <div className="input-container">
      <h4>word in line</h4>
      <div className="input-box">
      <button className="btn" onClick={()=>setNbrChars((nbrChars<1)? 0 :nbrChars-1)}>&lsaquo;</button>
      <input type='text' onChange={handleChange} value={nbrChars}></input>
      <button className="btn" onClick={()=>setNbrChars((nbrChars>=15)? 15 : nbrChars+1)}>&rsaquo;</button>
      </div>
    </div>
  )
}
export default CharInput;