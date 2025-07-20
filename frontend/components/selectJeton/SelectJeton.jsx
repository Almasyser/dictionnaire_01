// import axios from 'axios';
import "./selectjeton.css";
function SelectJeton(props){
  const {selected, setSelected, myArray, jetons} = props;
  const handleClick = (el)=>{
    setSelected(jetons[myArray[el]]);
  }
  return(
   <section className="line-container">
      <h3>make word</h3>
      <div className="line">
        <img src={selected} alt="@@@" />
      </div>
      <ul>
        {
         myArray &&myArray.map((el, index) => {
            return(
              <li key={index}>
                <img src={jetons[el]} alt="###" onClick={()=>handleClick(index)}/>
              </li>
            )
          })
        }
      </ul>

    </section>
  )
}
export default SelectJeton;


