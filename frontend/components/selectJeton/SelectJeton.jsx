// import axios from 'axios';
import "./selectjeton.css";
import jetons from "../../../public/Jetons";
import { useEffect, useState } from "react";
function SelectJeton(){
  const [myArray, setMyArray] = useState([jetons]);
  const [choice, setChoice]= useState(null);

  useEffect(()=>{
    const cles = Object.keys(jetons);
    setMyArray(cles);
  },[]);

  const handleClick=(el)=>{
    setChoice(el);
    console.log(el);
    
  }
  return(
    <section className="jeton-container">
      {choice && 
      <img src={choice} />}
      <div>select jeton</div>
      <ul>
        {myArray && myArray.map((el)=>{
          return(
            <li key={el}>
              <img src={jetons[el]} alt={el} onClick={()=>handleClick(jetons[el])}/>
            </li>
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