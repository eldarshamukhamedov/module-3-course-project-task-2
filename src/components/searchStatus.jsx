import React from "react";


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
const SearchStatus = ({numberOfUsers}) =>  {
    const badgeClass = `badge bg-${numberOfUsers > 0 ? "primary":"danger"}`; 
    return      (
        <h3><span className={badgeClass}>{getMessage(numberOfUsers,"Никто с тобой не тусанёт","человек тусанёт","человека тусанут","человек тусанут")}</span></h3> 
        );
}

export default SearchStatus;