import React from 'react'
import SinglePerson from './single-person'

const List = ({people,removeItem}) => {

    return (
    <div>
        <h3>List Component</h3>
      {people.map((p) => {
            return <SinglePerson {...p} key= {p.id} removeItem={removeItem}/>
      })}
    </div>
  )
}

export default List
