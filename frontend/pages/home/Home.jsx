// import FindWord from "../../components/findWord/FindWord";
// import SelectJeton from "../../components/selectJeton/SelectJeton";
// import BuildWord from "../../components/buildWord/BuildWord";
import MakeWord from "../../components/makeWord/MakeWord";
import "./home.css";
function Home(){
  return(
    <section className="home">
      <div className="title">Anti-sèche Scrabble</div>
      <div className="subtitle">Le dictionnaire du scrabble</div>
      {/* <FindWord /> */}
      {/* <SelectJeton /> */}
      {/* <BuildWord /> */}
      <MakeWord />
    </section>
  )
}
export default Home;