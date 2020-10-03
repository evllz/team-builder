import React, { useState } from "react";
import "./App.css";
import "./Components/UserForm";
import UserForm from "./Components/UserForm";
import Users from "./Components/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (props) => {
    const newUser = {
      user_name: props.user_name,
      user_email: props.user_email,
      user_role: props.user_role,
    };
    setUsers([...users, newUser]);
  };

  const deleteUser = (index) => {
    const mask = [...users];
    mask.splice(index, 1);
    setUsers(mask);
  };
  return (
    <div>
      <UserForm addNewUser={addNewUser} />
      <Users users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
