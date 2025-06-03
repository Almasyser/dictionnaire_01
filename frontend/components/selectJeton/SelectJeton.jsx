import fs from 'fs';
function SelectJeton(){
  const readImageFile=(file)=> {
    // read binary data from a file:
    const bitmap = fs.readFileSync(file);
    // const buf = new Buffer(bitmap);
    return bitmap;
  }
  return(
    <>
    <div>select jeton</div>
    {readImageFile(`E:/Developpement/React/Scrabble/dictionnaire_01/public/Jetons/A.png`) }
    </>
  )
}
export default SelectJeton;


// CREATE TABLE `dictionnaire_csv`.`jeton` (
//   `idjeton` INT NOT NULL AUTO_INCREMENT,
//   `jetonimg` BLOB NULL,
//   PRIMARY KEY (`idjeton`));
// E:\Developpement\React\Scrabble\dictionnaire_01\public\Jetons