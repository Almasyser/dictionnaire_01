// import img from "../../../public/Jetons/A.png"
import {useRef} from "react";
import axios from 'axios';
import "./selectjeton.css";

function SelectJeton(){
  // const [char, setChar] = useState('*');
  let url ='';
  const ref = useRef(null);
  let i = 65;
  const array =[];
  do{
    const lettre = ( String.fromCharCode(i));
    array.push(lettre);
    i++;
  }
  
  while(i<91);
  const handleClick=(char) => {
    url=`E:/Developpement/React/Scrabble/dictionnaire_01/public/Jetons/${char}.png`;
    console.log("URL", url);
    try{
      const response = axios.post('http://localhost:5050/addJeton',{ jeton: url })
      console.log("reussi",response);
      } catch (error){
      console.log("erreur ",error);
    }
    }
  return(
    <section className="jeton-container">
      {/* <h1>{char}</h1> */}
      <div>select jeton</div>
      <ul>
        {array && array.map((el)=>{
          return(
            <li key={el}><img src={`../../../public/Jetons/${el}.png`} onClick={()=>handleClick(el)} ref={ref}/></li>
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