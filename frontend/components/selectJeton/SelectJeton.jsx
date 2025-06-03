// import img from "../../../public/Jetons/A.png"
import { useState } from "react";
import "./selectjeton.css";
function SelectJeton(){
  const [char, setChar] = useState('');
  let i = 65;
  const array =[];
  do{
    const lettre = ( String.fromCharCode(i));
    array.push(lettre);
    i++;
    console.log(array);
  }
  while(i<91);

  return(
    <section className="jeton-container">
      <h1>{char}</h1>
      <div>select jeton</div>
      <ul>
        {array && array.map((el)=>{
          return(
            <li key={el}><img src={`../../../public/Jetons/${el}.png`} onClick={()=>setChar(el)}/></li>
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