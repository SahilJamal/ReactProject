import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { books } from '../book';

const SingleProduct = () => {

    const {bid} = useParams();

    var book = books.find((b)=>{
        return b.id == bid;
    });

    console.log(book);

    const {title,author,imgPath} = book;

  return (
    <div>
        <img src={imgPath} alt='imgPath'/>
      <h1>{title}</h1>
      {/* <p>Products id {id}</p> */}
      <h2>{author}</h2>
      <Link to={'/products'}>back</Link>
    </div>
  )
}

export default SingleProduct;
