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

  //handle for Delete button
  const handleDelete = (id) => {
    setUsersArray((prevState) => prevState.filter((user) => user._id !== id));
  };

  //handle for bookmark button
  const handleBookMark = (id) => {
    setUsersArray((prevState) => {
      return prevState.map((theUser, ind, arr) => {
        if (theUser._id !== id) return theUser;
        else {
          theUser.bookMark = !theUser.bookMark; //DOES NOT WORK!
          theUser.completedMeetings++; //to verify how many times it is called
          return theUser;
        }
      });
    });
  };

  ////           another version
  // const handleBookMark = (id) => {
  //   setUsersArray((prevState) => {
  //     const elementIndex = prevState.findIndex((user) => user._id === id);
  //     const newArray = [...prevState];
  //     newArray[elementIndex].bookMark = !newArray[elementIndex].bookMark;
  //     newArray[elementIndex].completedMeetings += 1;
  //     return newArray;
  //   });
  // };

  return (
    <Users
      users={usersArray}
      onDelete={handleDelete}
      onBookMark={handleBookMark}
    />
  );
};

export default App;
