// import axios from 'axios';
import "./selectjeton.css";
function SelectJeton(props){
  const {setSelected, myArray, jetons, setMenuVisible} = props;
  const handleClick = (el)=>{
    setSelected(el);
  }
  return(
   <section className="line-container">
      <button className="btn-close" onClick={()=> setMenuVisible(false)}>Masquer le clavier</button>
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


