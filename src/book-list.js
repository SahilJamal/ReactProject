import './index.css'
import { books } from './book';
import Book from './books';

const BookList = () => {
  return ( <section className='booklist'>
    {books.map((book) => {
    return <Book {...book} key={book.id} />
  })}
  </section> 
  )

}

export default BookList;