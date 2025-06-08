import { useState } from "react";
import jetonVide from "../../../public/Jetons/0.png";
import "./buildword.css";
function BuildWord (){
  const [lineShow, setLineShow] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const[nbrCap, setNbrCap] = useState(0);
  const lineArray = Array(nbrCap).fill(nbrCap);
  console.log(lineArray);

  
    return(
    <section className="build-container">
      <div>Buid Word</div>
      <input type="number" onChange={(e)=>setNbrCap(parseInt(e.target.value, 10))} />
      <div>{nbrCap}</div>
      <button type="button" onClick={()=>setLineShow(!lineShow)}>Valide</button>
      <div className="line-box">
        {lineArray && lineShow && lineArray.map((index)=>{
          return(
            <>
              <img key={index} src={jetonVide} onClick={()=>setSubMenu(!subMenu)}/>
            </>
          )
        })}
      </div>
      {subMenu && <div>submenu</div>}

    </section>
  )
}
export default BuildWord;