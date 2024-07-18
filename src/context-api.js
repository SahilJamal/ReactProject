import React, { useContext, useState } from 'react'
import { people } from './people.js';
import PersonInfo from './person-info.js';


export const PeopleContext = React.createContext();


const ContextApi = () => {

    const [data , setData] = useState(people);

    const removeItem = (id) =>{
      var newData = data.filter((p)=>{
         return p.id !== id;
       });
       setData(newData)
     }
 

  return (
    <PeopleContext.Provider value={{data,removeItem}}>
        <PersonInfo />
    </PeopleContext.Provider>
  )
}



export default ContextApi;
