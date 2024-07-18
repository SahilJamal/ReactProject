import React ,{ useState } from 'react'
import {people} from './people';
import List from './list';

const PropertiyDrilling = () => {

    const [peopleData , setPeopleData] = useState(people);

    const removeItem = (id) =>{
     var newData = peopleData.filter((p)=>{
        return p.id !== id;
      });
      setPeopleData(newData)
    }

  return (
    <div>
        <h2>Property Drilling</h2>
      <List people = {peopleData} removeItem={removeItem}/>
    </div>
  )
}

export default PropertiyDrilling;
