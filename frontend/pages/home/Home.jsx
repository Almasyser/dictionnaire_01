// import FindWord from "../../components/findWord/FindWord";
// import SelectJeton from "../../components/selectJeton/SelectJeton";
import BuildWord from "../../components/buildWord/BuildWord";
import "./home.css";
function Home(){
  return(
    <section className="home">
      <div className="title">Anti-sèche Scrabble</div>
      {/* <FindWord /> */}
      {/* <SelectJeton /> */}
      <BuildWord />
    </section>
  )
}
export default Home;