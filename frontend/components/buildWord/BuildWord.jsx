import { useState } from "react";
import SelectJeton from "../selectJeton/SelectJeton";
import jetonVide from "../../../public/Jetons/0.png";
import "./buildword.css";
function BuildWord (){
  const [lineShow, setLineShow] = useState(false);
  const [subMenuShow, setSubMenuShow] = useState(false);
  const [nbrCap, setNbrCap] = useState(0);
  const [choice, setChoice]= useState(null);
  const lineArray = Array(nbrCap).fill(nbrCap);
  console.log("###", choice);
  const handleClick = (index)=>{
    setSubMenuShow(!subMenuShow)
    lineArray[index] = choice;
  }
  return(
    <section className="build-container">
      <div>Buid Word</div>
      <input type="number" onChange={(e)=>setNbrCap(parseInt(e.target.value, 10))} />
      <div>{nbrCap}</div>
      <button type="button" onClick={()=>setLineShow(!lineShow)}>Valide</button>
      <div className="line-box">
        {lineArray && lineShow && lineArray.map((el, index)=>{
          return(
            <img key={index} src={el || jetonVide} onClick={()=>handleClick(el,index)}/>
          )
        })}
      </div>
      {subMenuShow && <SelectJeton choice={choice} setChoice={setChoice}/> }

    </section>
  )
}
export default BuildWord;



