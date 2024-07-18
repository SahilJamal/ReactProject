import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/myapp'>Home</Link><br/>
        <Link to='/myapp/about'>About</Link> <br />
        <Link to='/myapp/products'>Products</Link><br />
    </div>
  )
}

export default Navbar