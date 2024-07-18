import React, { useContext } from "react";
import { Container } from "./ContextApi";
const OneProduct = (props) => {
  const { cart, setCart } = useContext(Container);

  const { p } = props;

  const { id, title, author, imgPath, price } = p;

  return (
    <div>
      <img
        src={imgPath}
        alt="book"
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{title}</h3>
      <i>{author}</i>
      <br />
      <b>{price}</b>
      <br />
      {cart.includes(p) ? (
        <button
          onClick={() => {
            setCart(cart.filter((c) => c.id !== id));
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => {
            setCart([...cart, p]);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default OneProduct;
