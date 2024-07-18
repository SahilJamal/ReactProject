import React from 'react'

const SinglePerson = ({id,name,removeItem}) => {

  return (
    <div>
      
        <h1>Details</h1>
        <h4>{id}</h4>
        <p>{name}</p>
        <br/>
        <button onClick={()=>{removeItem(id)}}>Delete</button>

    </div>
  )
}

export default SinglePerson;
