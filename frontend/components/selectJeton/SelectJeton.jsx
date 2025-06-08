// import img from "../../../public/Jetons/A.png"
import { useState, useRef } from "react";
import axios from 'axios';
import "./selectjeton.css";

function SelectJeton(){
  // const [char, setChar] = useState('*');
  const [url]=useState('E:/Developpement/React/Scrabble/dictionnaire_01/public/Jetons/A.png');
  const ref = useRef(null);
  let i = 65;
  const array =[];
  do{
    const lettre = ( String.fromCharCode(i));
    array.push(lettre);
    i++;
  }
  while(i<91);
  
  const handleclick =async (e)=>{
    e.preventDefault();
    // setChar(e);
    if(!url) return;
    await axios('http//:localhost:5050/addJeton',{
      jeton: url,
      header:{'Content-Type': 'application/json'},
    })
  }
 
  
  return(
    <section className="jeton-container">
      {/* <h1>{char}</h1> */}
      <div>select jeton</div>
      <ul>
        {array && array.map((el)=>{
          return(
            <li key={el}><img src={`../../../public/Jetons/${el}.png`} onClick={handleclick} ref={ref}/></li>
          )
        })}
      </ul>
      
    </section>
  )
}
export default SelectJeton;


// CREATE TABLE `dictionnaire_csv`.`jeton` (
//   `idjeton` INT NOT NULL AUTO_INCREMENT,
//   `jetonimg` BLOB NULL,
//   PRIMARY KEY (`idjeton`));
// E:\Developpement\React\Scrabble\dictionnaire_01\public\Jetons