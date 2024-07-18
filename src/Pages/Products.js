import React from 'react'
import { Link } from 'react-router-dom';
import { books } from '../book';

const Products = () => {
  return (
    <div>
      {books.map((p)=>{
      return <article key={p.id}>
          <h4> {p.title}</h4>
          <Link to={`/products/${p.id}`}> More Info... </Link>
          </article>
      })}
    </div>
  )
}

export default Products;
