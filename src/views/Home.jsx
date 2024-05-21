import { useState, useEffect } from 'react'
import { getBooks } from '../services/book'
import SearchBar from '../components/SearchBar'
import CardBook from '../components/CardBook'
import DetailsBook from '../components/DetailsBook'
import Footer from '../components/Footer'
import TabFilter from '../components/TabFilter'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'

const Home = () => {
  const [booksStatus, setBooksStatus] = useState([])
  const [textSearch, setTextSearch] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)


  const fetchData = () => {
    const librosSet = getBooks(textSearch)
    setBooksStatus(librosSet)
  }

  const changeTextSearch = (value) => {
    setTextSearch(value)
  }

  const categoriesChosen = (flag) => {
    const librosFilter = booksStatus.filter((book) => book.Categories === flag)
    setBooksStatus(librosFilter)
  }

  const openDetailsModal = (book) => {
    setSelectedBook(book)
  }

  const closeDetailsBook = () => {
    setSelectedBook(null)
  }


  useEffect(() => {
    fetchData()
  }, [textSearch])

  return (
    <div className="bg-[--colorPrim] min-h-screen">
      <Navbar />
      <div className="container mx-auto w-18/12 md:w-8/12">
        <h1 className="title">Library App</h1>
        <div className="mx-0">
          <SearchBar
            textoAbuscar={textSearch}
            changeTextSearch={changeTextSearch}
          />
        </div>
        <TabFilter handleFilter={categoriesChosen} />
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