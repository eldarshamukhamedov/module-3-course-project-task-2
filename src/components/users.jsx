import React from "react";
import User from "./user";
import SearchStatus from "./searchStatus";

    
const Users = ({users,...props}) => {

///////////////////// functions ///////////////////////////////


//handle for Delete button
const handleDeleteButton = (id) => {
    props.onDelete(id);
}
//handle for BookMark button
const handleBookMarkButton = (id) => {
    props.onBookMark(id);
}


//display the header
const displayHeader = () => {
    return (
        <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col">Избранное</th>
        <th />
      </tr>
    )//return React component 
    }
//display the table's rows for all users
const  displayUsers = (
    users //array with users
    ) => {
    return users.map(user => {
        return <User 
        key = {user._id} 
        user={user} 
        onDelete={handleDeleteButton}
        onBookMarkUsers={handleBookMarkButton}
        >
        </User>
    }) //return React component 
}

///////////// main logic ///////////////////////////
if (users.length > 0) return (
    <>
        <SearchStatus numberOfUsers={users.length}/>
        {/* {renderPhrase(users.length)} */}
        <table className="table">
            <thead>
                {displayHeader()}
            </thead>
            <tbody>
                {displayUsers(users)}
            </tbody>
        </table>
    </>
)
else return (
    <>
        <SearchStatus numberOfUsers={users.length}/>
    </>
)
}

export default Users;






