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
        <th />
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

//return the correct message depends on the numebr of users
const getMessage= (num,var0,var1,var2,var3) => {
    if (num<1) return var0;
    const lastNumber = Number(num.toString().slice(-1)); //?
    if (lastNumber===1)
        return `${num} ${var1} с тобой сегодня`;
    else if ((lastNumber>=2)&&(lastNumber<=4))
        return `${num} ${var2} с тобой сегодня`;
    else return `${num} ${var3} с тобой сегодня`;
}

//display message obj at the top
const renderPhrase = (numberOfUsers) =>  {
    const badgeClass = `badge bg-${numberOfUsers > 0 ? "primary":"danger"}`; 
    return      (
        <h3><span className={badgeClass}>{getMessage(numberOfUsers,"Никто с тобой не тусанёт","человек тусанёт","человека тусанут","человек тусанут")}</span></h3> 
        );
}

///////////// main logic ///////////////////////////
if (usersArray.length > 0) return (
    <>
        {renderPhrase(usersArray.length)}
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
else return (
    <>
        {renderPhrase(usersArray.length)}
    </>
)

}

export default Users;






