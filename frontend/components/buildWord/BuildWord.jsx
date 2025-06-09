import { useEffect, useState } from "react";
import axios from 'axios';
import jetonVide from "../../../public/Jetons/0.png";
import "./buildword.css";
function BuildWord (){
  const [lineShow, setLineShow] = useState(false);
  const [subMenuShow, setSubMenuShow] = useState(false);
  const [nbrCap, setNbrCap] = useState(0);
  const [capsArray, setCapsArray] = useState([]);
  const lineArray = Array(nbrCap).fill(nbrCap);
  // console.log(lineArray);
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response= await axios.get('http://localhost:5050/Jeton');
        setCapsArray(response);
     } catch (error){
       console.log("erreur ",error);
     }
    };
    fetchData();
  },[]);

  console.log("### ",capsArray.data);
  
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
              <img key={index} src={jetonVide} onClick={()=>setSubMenuShow(!subMenuShow)}/>
            </>
          )
        })}
      </div>
      {subMenuShow && <div>submenu</div>}

    </section>
  )
}
export default BuildWord;