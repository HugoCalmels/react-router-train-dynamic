
const Book = (props) => {

  return (
    <div className="book">
      <p>{props.book.title}</p>
      <p>{props.book.author}</p>
      <p>{props.book.description}</p>
      <p>{props.book.slug}</p>
    </div>
  )
}

export default Book