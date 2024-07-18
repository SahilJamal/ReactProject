import React, { useContext, useEffect, useState } from "react";
import OneProduct from "./OneProduct";
import { Container } from "./ContextApi";

// const Cart = ({ cart, setCart }) => {
const Cart = () => {
  const { cart, setCart } = useContext(Container);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      {total}
      <h1>Cart</h1>
      {cart.map((p) => {
        return <OneProduct p={p} key={p.id} cart={cart} setCart={setCart} />;
      })}
    </div>
  );
};

export default Cart;
