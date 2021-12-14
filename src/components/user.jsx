import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({user,...props}) => {
    
    return (
      <tr key={user._id}> 
          <td>{user.name}</td>
          <td>{Qualitie(user.qualities)}</td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td><button onClick={() => props.onBookMarkUsers(user._id)} >{BookMark(user.bookMark)}</button></td>
          <td><button 
          className = "btn btn-danger btn-sm m-2"
          onClick={() => props.onDelete(user._id)}
          >delete</button></td>
      </tr>
      )
  
};

export default User;

