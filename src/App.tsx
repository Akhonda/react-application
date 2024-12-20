import "./App.css";
import Cards from "./components/cards/Cards";
import TCard from "./components/cards/TCard";
import Counter from "./components/Counter";
import Menu from "./components/menu/Menu";
const App = () => {
  return (
    <div>
      <Menu />
      <Counter />
      <Cards />
      <h1>New Cards</h1>
      <TCard />
    </div>
  );
};

export default App;
