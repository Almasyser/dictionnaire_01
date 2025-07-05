import FindWord from "../../components/findWord/FindWord";
// import SelectJeton from "../../components/selectJeton/SelectJeton";
// import BuildWord from "../../components/buildWord/BuildWord";
import "./home.css";
function Home(){
  return(
    <>
      <div className="title">Anti-sèche Scrabble</div>
      <FindWord />
      {/* <SelectJeton /> */}
      {/* <BuildWord /> */}
    </>
  )
}
export default Home;