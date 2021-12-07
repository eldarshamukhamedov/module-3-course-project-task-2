import react, {useState} from "react";
import api from "../api"; //we don't have to specify index.js file, it will be used by default  


    
const Users = ()=>{


//////// initialization //////////////////////////////////////
const [usersArray, setUsersArray] = useState(api.users.fetchAll());
// const usersArray = api.users.fetchAll();



///////////////////// functions ///////////////////////////////

const handleDeleteButton = (id) => {
    setUsersArray((prevState)=> prevState.filter(user => user._id!==id) )
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
        <th scope="col"></th>
      </tr>
    )//return React component 
    }
//display the table's rows for all users
const  displayUsers = (
    users //array with users
    ) => {
    return users.map(user => {return (
    <tr key={user._id}> 
        <td>{user.name}</td>
        <td>{displayQualities(user.qualities)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td><button 
        className = "btn btn-danger btn-sm m-2"
        onClick={() => handleDeleteButton(user._id)}
        >delete</button></td>
    </tr>
    )}) //return React component 
}

//display the all qualities in the array
const displayQualities = (
    quals  //array with qualities
    ) =>  {
    return quals.map(qual => {return (
        <span key={qual._id} className={`badge bg-${qual.color} m-2`}>{qual.name}</span>
    )}) //return React component 
}

//return the correct form for "человек" depends on number 
const getRightWord4Man = (number) =>{
    if ((number === 1) || (number>4))
    return "человек";
    else return "человека";
}

//return the correct form for "тусануть" depends on number 
const getRightWord4HangOut = (number) =>{
    if (number < 5) 
    return "тусанёт";
    else return "тусанут";
}

const getMessage = (numberOfUsers) =>{
    return  numberOfUsers  > 0 
    ? `${numberOfUsers } ${getRightWord4Man(numberOfUsers )} ${getRightWord4HangOut(numberOfUsers )} с тобой сегодня`
    :"Никто с тобой не тусанёт";
}

//display message obj at the top
const renderPhrase = () =>  {
    const badgeClass = `badge bg-${usersArray.length > 0 ? "primary":"danger"}`; 
    return      (
        <h3><span className={badgeClass}>{getMessage(usersArray.length)}</span></h3> 
        );
}

///////////// main logic ///////////////////////////

return (
    <>
        {renderPhrase()}
        <table className="table">
            <thead>
                {displayHeader()}
            </thead>
            <tbody>
                {displayUsers(usersArray)}
            </tbody>
        </table>
    </>
)

}

export default Users;






