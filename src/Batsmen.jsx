import { useState } from "react";
import "./App.css";
export default function Batsman() {
  const counterStyle = {
    border: "2px solid yellow",
    padding: "10px 15px",
    margin: "10px",
    borderRadius: "20px",
  };
  const [runs, setRuns] = useState(0);
  const [singles, setSingles] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handleSingle = () => {
    const updatesRuns = runs + 1;
    const updatedSingles = singles + 1;
    setSingles(updatedSingles);
    setRuns(updatesRuns);
  };
  const handleFour = () => {
    const updatesRuns = runs + 4;
    const updatesFours = fours + 1;
    setFours(updatesFours);
    setRuns(updatesRuns);
  };
  const handleSix = () => {
    const updatesRuns = runs + 6;
    const updatesSixes = sixes + 1;
    setSixes(updatesSixes);
    setRuns(updatesRuns);
  };
  return (
    <div style={counterStyle}>
      <h3>Player: BanglaDeshi Batsmen</h3>
      {runs > 50 && <p>Congrats: You have do 50 Runs </p>}
      <p className="counter">
        <small>Singles: {singles}</small>
        <small>Fours: {fours}</small>
        <small>Sixes: {sixes}</small>
      </p>
      <h2>Score: {runs} </h2>
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
