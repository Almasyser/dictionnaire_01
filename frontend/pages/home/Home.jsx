import MakeWord from "../../components/makeWord/MakeWord";
import "./home.css";
function Home(){
  return(
    <section className="home">
      <div className="title">Anti-sèche Scrabble</div>
      <div className="subtitle">Le dictionnaire du scrabble</div>
      <MakeWord />
    </section>
  )
}
export default Home;