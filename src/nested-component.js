import ReactDOM from 'react-dom';
import './index.css'

const BookList = () => {
  return (
      <section className='booklist'>
        <Book />
        <Book />
        <Book />
      </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Title = () => {
  return <h3>A Man Called Ove</h3>
};
const Author = () => {
  return <h4><i>Fredric BackMan</i></h4>
};
const Image = () => {
  return <img src='https://m.media-amazon.com/images/I/81DXIOk9glL._SY466_.jpg' alt='book' style={{width:'200px',height:'200px'}}/>
};

ReactDOM.render(<BookList /> , document.getElementById('root'));