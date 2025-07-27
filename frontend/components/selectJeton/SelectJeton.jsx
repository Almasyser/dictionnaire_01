// import axios from 'axios';
import "./selectjeton.css";
function SelectJeton(props){
  const {updateArray,id, myArray, jetons, setVisible} = props;
  const handleClick = (el)=>{
    updateArray(prev =>
      prev.map((item,i)=> i === id ? el: item)
    );
  }
  return(
   <section className="line-container">
      <button className="btn-close" onClick={()=> setVisible(false)}>Masquer le clavier</button>
      <ul>
        {
         myArray && myArray.map((el, index) => {
            return(
              <li key={index} >
                <img src={jetons[el]} alt="###" onClick={()=>handleClick(index)} />
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
export default SelectJeton;


