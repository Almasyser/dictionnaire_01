import { useEffect, useState } from "react";
// import axios from 'axios';
import jetonVide from "../../../public/Jetons/0.png";
import "./buildword.css";
import jetons from "../../../public/Jetons";
function BuildWord (){
  const [lineShow, setLineShow] = useState(false);
  const [subMenuShow, setSubMenuShow] = useState(false);
  const [nbrCap, setNbrCap] = useState(0);
  const [myArray, setMyArray] = useState([jetons]);
  const [choice, setChoice]= useState(null);
  const lineArray = Array(nbrCap).fill(nbrCap);
  useEffect(()=>{
    const cles = Object.keys(jetons);
    setMyArray(cles);
  },[]);
  const handleClick=(el)=>{
    setChoice(el);
    console.log(el);
    
  }
  console.log("choice ",choice);
  
    return(
    <section className="build-container">
      <div>Buid Word</div>
      <input type="number" onChange={(e)=>setNbrCap(parseInt(e.target.value, 10))} />
      <div>{nbrCap}</div>
      <button type="button" onClick={()=>setLineShow(!lineShow)}>Valide</button>
      <div className="line-box">
        {lineArray && lineShow && lineArray.map((el, index)=>{
          return(
              <img key={index} src={jetonVide} onClick={()=>setSubMenuShow(!subMenuShow)}/>
            )
        })}
      </div>
      {subMenuShow && myArray && myArray.map((el, index)=>{
        return(
          <li key={index}>
              <img src={jetons[el]} alt={el} onClick={()=>handleClick(jetons[el])}/>
            </li>
            
        )
      })}

    </section>
  )
}
export default BuildWord;

  // console.log(lineArray);
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try{
  //       const response= await axios.get('http://localhost:5050/Jeton');
  //       setCapsArray(response);
  //    } catch (error){
  //      console.log("erreur ",error);
  //    }
  //   };
  //   fetchData();
  // },[]);

  // console.log("### ",capsArray.data[2].jetonimg);