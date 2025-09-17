import "./App.css";
import Batsman from "./Batsmen";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("I am Clicked");
  }
  const add5 = (num) => {
    const newNumber = num + 5;
    alert(newNumber);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => add5(5)}>Add 5</button>
    </>
  );
}

export default App;
