import React, { useState } from "react";

import OneProduct from "./OneProduct";
import { books } from "../book";

const AllProducts = () => {
  const [book, setBook] = useState(books);

  return (
    <div>
      {book.map((p) => {
        return <OneProduct key={p.id} p={p} />;
      })}
    </div>
  );
};

export default AllProducts;
