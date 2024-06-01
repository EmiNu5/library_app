import { useState, useEffect } from 'react'
import { getBooks } from '../services/book'
import SearchBar from '../components/SearchBar'
import CardBook from '../components/CardBook'
import DetailsBook from '../components/DetailsBook'
import Footer from '../components/Footer'
import TabFilter from '../components/TabFilter'
import books from '../mocks/books'
import Navbar from '../components/Navbar'

const Home = () => {
  const [booksStatus, setBooksStatus] = useState([])
  const [allBooks, setAllBooks] = useState([])
  const [textSearch, setTextSearch] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    setBooksStatus(books)
    setAllBooks(books)
    // fetchData()
  }, [])
  // }, [textSearch])

  const fetchData = () => {
    const librosSet = getBooks(textSearch)
    setBooksStatus(librosSet)
  }

  const changeTextSearch = (value) => {
    setTextSearch(value)
  }

  const categoriesChosen = (flag) => {
    if(flag === 'all') {
      setBooksStatus(allBooks)
    } else {
      const librosFilter = allBooks.filter((book) => book.Categories === flag)
      setBooksStatus(librosFilter)
    }
  }

  const openDetailsModal = (book) => {
    setSelectedBook(book)
  }

  const closeDetailsBook = () => {
    setSelectedBook(null)
  }

  return (
    <div className="bg-[--colorPrim] flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto w-18/12 md:w-8/12">
        <h1 className="title">Library App</h1>
        <div className="mx-0">
          <SearchBar
            textoAbuscar={textSearch}
            changeTextSearch={changeTextSearch}
          />
        </div>
        <TabFilter handleFilter={categoriesChosen} booksStatus={booksStatus} />
        <CardBook allBooks={booksStatus} setDetailsBooks={openDetailsModal} />
      </div>
      {selectedBook && (
        <DetailsBook
          book={selectedBook}
          closeDetailsBook={closeDetailsBook}
        />
      )}
      <Footer />
    </div>
  )
}

export default Home