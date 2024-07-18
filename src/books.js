 const Book = (props) => {
    console.log(props);
  
    function fun(e){
      console.log(e);
      console.log(e.target);
    }
  
    const bookTitle = (title) => {
      alert(`You selected the book with title ${title}`)
    }
  
    const {imgPath , title , author} = props;
    return (
      <article className='book'>
        
        <img src={imgPath} alt='book' style={{width:'200px',height:'200px'}} onMouseOver={fun}/>
        <h3>{title}</h3>
        <i>{author}</i>
        <button onClick={() => {alert(`You selected the book with the author ${author}`)}}>Author</button>
        <button onClick={() => {bookTitle(title)}}>Title</button>
        {/* {(4*5===20)?"true":"false"}
        {title.toUpperCase()} */}
  
      </article>
    );
  };
  
export default Book;