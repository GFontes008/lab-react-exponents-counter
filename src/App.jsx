import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import ExponentTwo from "./ExponentTwo";
import ExponentThree from "./ExponentThree";
import ExponentFour from "./ExponentFour";
import ExponentFive from "./ExponentFive";
import ExponentSix from "./ExponentSix";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>
      <Counter count={count} increment={increment} decrement={decrement} />
      <br />
      <h2>
        <em>Exponents</em>
      </h2>
      <div className="container">
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />
      </div>
    </div>
  );
}

export default App;
