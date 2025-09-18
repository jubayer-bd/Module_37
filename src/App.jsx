import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsmen";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";
const fetchUsers = fetch("http://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const fetchFriends = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  return res.json();
};
function App() {
  const friendsPromise = fetchFriends();
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
      <Suspense fallback={<h3> Friends are Coming for treat ...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Suspense fallback={<h3>Data loading</h3>}>
        <Users fetchUsers={fetchUsers}> </Users>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => add5(5)}>Add 5</button>
    </>
  );
}

export default App;
