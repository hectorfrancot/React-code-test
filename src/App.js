import { img } from "./assets/imgs";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <p>
        Step 1: Make a call to <a href="https://pokeapi.co/">Poke API</a> and
        get the info for a single pokemon
      </p>
      <p>
        Step 2: Create an input in such way that you can type any pokemon name
        and get its info
      </p>
      <p>Step 3: Create as many components as you need to mock a pokedex:</p>
      <img src={img} alt="Pokedex" />
    </div>
  );
}
