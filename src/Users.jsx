import { use } from "react";

export default function Users({ fetchUsers }) {
  const counterStyle = {
    border: "2px solid green",
    padding: "10px 15px",
    margin: "10px",
    borderRadius: "20px",
  };
  const users = use(fetchUsers);
  console.log(users);
  return (
    <div style={counterStyle}>
      <h3> Users: {users.length} </h3>
    </div>
  );
}
