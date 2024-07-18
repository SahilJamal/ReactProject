import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../Shpping_cart/ContextApi";

const StyledNavbar = () => {
  const { cart, setCart } = useContext(Container);

  return (
    <div>
      {/* <NavLink to='/' style={(({isActive})=>{return {color:isActive?'red':'gray'}})}>Home</NavLink><br/>
        <NavLink to='/about' style={(({isActive})=>{return {color:isActive?'red':'gray'}})}>About</NavLink> <br />
        <NavLink to='/products' style={(({isActive})=>{return {color:isActive?'red':'gray'}})}>Products</NavLink><br /> */}
      {/* <NavLink to='/products/1/sahil' style={(({isActive})=>{return {color:isActive?'red':'gray'}})}>Single Products</NavLink><br /> */}
      {/* <NavLink to='/login' style={(({isActive})=>{return {color:isActive?'red':'gray'}})}>Login Page</NavLink><br /> */}
      <NavLink
        to="/allproducts"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        All Products
      </NavLink>
      <br />
      <NavLink
        to="/cart"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        Cart {cart.length}
      </NavLink>
      <br />
      <NavLink
        to="/booklist"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        BookList
      </NavLink>
      <br />
      <NavLink
        to="/usestate"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        useState
      </NavLink>
      <br />
      <NavLink
        to="/github"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        Github
      </NavLink>
      <br />
      <NavLink
        to="/multiplereturn"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        MultipleReturns
      </NavLink>
      <br />
      <NavLink
        to="/shortcurcuit"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        ShortCircuit
      </NavLink>
      <br />
      <NavLink
        to="/ternary"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        Ternary
      </NavLink>
      <br />
      <NavLink
        to="/showandhidecomponent"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        ShowAndHideComponent
      </NavLink>
      <br />
      <NavLink
        to="/fromcontroller"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        FromController
      </NavLink>
      <br />
      <NavLink
        to="/refbasics"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        RefBasics
      </NavLink>
      <br />
      <NavLink
        to="/propertitydrilling"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        PropertiyDrilling
      </NavLink>
      <br />
      <NavLink
        to="/contextapi"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        ContextApi
      </NavLink>
      <br />
      <NavLink
        to="/githubpropdrilling"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        GithubPropdrilling
      </NavLink>
      <br />
      <NavLink
        to="/reducercounter"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        ReducerCount
      </NavLink>
      <br />
      <NavLink
        to="/reducercounter1"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        ReducerCount1
      </NavLink>
      <br />
      <NavLink
        to="/timecounter"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        TimeCounter
      </NavLink>
      <br />
      <NavLink
        to="/birthdaycounter"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        BirthdayCounter
      </NavLink>
      <br />
      <NavLink
        to="/reduxcounter"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        ReduxCounter
      </NavLink>
      <br />
    </div>
  );
};

export default StyledNavbar;
