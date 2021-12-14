import React, { useState } from "react";
import api from "./api"; //we don't have to specify index.js file, it will be used by default
import Users from "./components/users";

const App = () => {
  //////// initialization //////////////////////////////////////
  //get the original array of users from the fake server
  const initialArrayOfUsers = api.users.fetchAll();

  //add bookMarks = false to each user as default
  initialArrayOfUsers.forEach((user) => {
    user.bookMark = false;
  });

  //initiate useState
  const [usersArray, setUsersArray] = useState(initialArrayOfUsers);

  // //handle for Delete button
  // const handleDelete2 = (id) => {
  //   setUsersArray((prevState) => prevState.filter((user) => user._id !== id));
  // };

  //handle for Delete button
  //with completedMeetings++ to determine how many times this handle is called
  //- see increase on the screen - it should be +1, not +2, but it is +2 on the screen
  const handleDelete = (id) => {
    setUsersArray((prevState) =>
      prevState.filter((user) => {
        if (user._id !== id) {
          user.completedMeetings++; //to determine how many times it is called - it should be +1, not +2
          return true;
        } else return false;
      })
    );
  };

  //handle for bookmark button
  //with completedMeetings++ to determine how many times this handle is called
  //- see increase on the screen - it should be +1, not +2, but it is +2 on the screen
  const handleBookMark = (id) => {
    setUsersArray((prevState) => {
      return prevState.map((theUser) => {
        if (theUser._id !== id) return theUser;
        else {
          theUser.bookMark = !theUser.bookMark; //DOES NOT change the value m because this handle is called twice!
          theUser.completedMeetings++; //to determine how many times it is called - it should be +1, not +2
          return theUser;
        }
      });
    });
  };

  return (
    <Users
      users={usersArray}
      onDelete={handleDelete}
      onBookMark={handleBookMark}
    />
  );
};

export default App;
