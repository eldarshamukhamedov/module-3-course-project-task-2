import React, { useState } from "react";
import api from "./api"; //we don't have to specify index.js file, it will be used by default
import Users from "./components/users";

const App = () => {
  //////// initialization //////////////////////////////////////
  const [usersArray, setUsersArray] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    setUsersArray((prevState) => prevState.filter((user) => user._id !== id));
  };

  return <Users users={usersArray} onDelete={handleDelete}></Users>;
};

export default App;
