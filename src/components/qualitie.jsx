import React from "react";

//display the all qualities in the array
const Qualitie = (
    quals  //array with qualities
    ) =>  {
    return quals.map(qual => {return (
        <span key={qual._id} className={`badge bg-${qual.color} m-2`}>{qual.name}</span>
    )}) //return React component 
}

export default Qualitie;