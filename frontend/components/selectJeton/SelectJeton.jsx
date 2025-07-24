// import axios from 'axios';
import "./selectjeton.css";
function SelectJeton(props){
  const {setSelected, myArray, jetons} = props;
  const handleClick = (el)=>{
    setSelected(el);
  }
  return(
   <section className="line-container">
      <h3>make word</h3>
      <div className="line">
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


