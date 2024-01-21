import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <h1>Tip Calculator</h1>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipA, setTipA] = useState(0);
  const [tipB, setTipB] = useState(0);

  const tip = bill * ((tipA + tipB) / 2 / 100);

  function handleReset() {
    setBill("");
    setTipA(0);
    setTipB(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Tip tip={tipA} onSelect={setTipA}>
        How did you like the service?
      </Tip>
      <Tip tip={tipB} onSelect={setTipB}>
        How did your friend like the service?
      </Tip>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        id="bill"
        value={bill}
        placeholder="Bill Value"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ tip, onSelect, children }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">It was great(20%)</option>
      </select>
    </div>
  );
}
function Output({ tip, bill }) {
  return (
    <h2>
      You pay ${tip + bill} (${bill} + ${tip} tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
