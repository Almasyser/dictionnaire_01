function WordInLine(props){
  const {setLineArray} = props;
  const handleClic=(e)=>{
    const nbrChars = parseInt(e.target.value);
    const line_array = Array(nbrChars).fill(nbrChars);
    line_array && setLineArray(line_array);
  }
  return(
    <>
      <h4>word in line</h4>
      <input type='number' onClick={handleClic}></input>
    </>
  )
}
export default WordInLine;