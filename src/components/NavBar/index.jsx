
import { Link } from 'react-router-dom'; 

const NavBar = (props) => {


  return (
    <nav className="navbar">

      {props.books.map(book => (

        <Link className="link" to={"/book/" + book.slug}>{ book.slug}</Link>
      ))}

    </nav>
  )
}

export default NavBar