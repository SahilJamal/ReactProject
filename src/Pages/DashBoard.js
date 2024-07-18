import React from 'react'
import { NavLink } from 'react-router-dom'

const DashBoard = (props) => {

    const{user} = props;

  return (
    <div>
      <h1>Welcome {user.fname}</h1>
      <NavLink to='/'>Home</NavLink>
    </div>
  )
}

export default DashBoard
