import React, { useEffect, useState }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"
import books from './data/books.jsx'
import NavBar from './components/NavBar'
import "./style.css"
import Book from './pages/Book/index'

const App = () => {

  const { bookSlug } = useParams();
  // d'accord donc ici bookSlug est un object VIDE
  const [ currentBook, setCurrentBook] = useState(undefined)

  console.log(books)


  console.log(bookSlug)
  useEffect(() => {
    console.log('lol')
    console.log(bookSlug)
    // eviter de wrapper le find avec {}
    const foundBook = books.find(book => book.slug === bookSlug)
    
    setCurrentBook(foundBook)
  }, [bookSlug])
  return (
    <BrowserRouter>
      <NavBar books={books}/>
      <main>
        <Routes>
          {currentBook === undefined ? books.map(book => (
            <Route path={"/book/:" + book.slug} element={<Book book={book}/>} />
          )) : <div class="book">ERROR</div> }
          {/* le rendu conditionnel marche a moitié, il aurait fallu le placer dans le child elem */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));