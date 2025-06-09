// import axios from 'axios';
import "./selectjeton.css";
import jetons from "../../../public/Jetons";
import { useEffect, useState } from "react";

function SelectJeton(){
  const [myArray, setMyArray] = useState([jetons]);
  
useEffect(()=>{
  const cles = Object.keys(jetons); 
  setMyArray(cles)// Récupère toutes les clés du JSON

},[]);
    
    
    // try{
      //   const response = axios.post('http://localhost:5050/addJeton',{ jeton: url })
      //   console.log("reussi",response);
      //   } catch (error){
        //   console.log("erreur ",error);
        // }
  
  console.log("###",myArray);
  return(
    <section className="jeton-container">
      {/* <h1>{char}</h1> */}
      <div>select jeton</div>
      <ul>
        {myArray && myArray.map((el)=>{
          return(
            <li key={el}>
              <img src={jetons[el]} alt={el} />
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