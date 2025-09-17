import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const counterStyle = {
    border: "2px solid yellow",
    padding: "10px 15px",
    margin: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={counterStyle}>
      <h3>Count: {count} </h3>
      <button onClick={handleAdd}> Add</button>
    </div>
  );
}
