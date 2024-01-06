import { useEffect, useState } from 'react'
import './App.css'
import { getLibros } from '../services/book.js'

import SearchBar from '../components/SearchBar'
import CardBook from '../components/CardBook'
import DetailsBook from '../components/DetailsBook'
import Footer from 'src/components/Footer'

const App = () => {
  const [booksStatus, setBooksStatus] = useState([])
  const [textSearch, setTextSearch] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)
  const [isOpenDetailsBook, setIsOpenDetailsBook] = useState(false)

  const fetchData = () => {
    const librosSet = getLibros(textSearch)
    setBooksStatus(librosSet)
  }

  const changeTextSearch = (value) => {
    setTextSearch(value)
  }

  const openDetailsModal = (book) => {
    setSelectedBook(book)
    setIsOpenDetailsBook(true)
  }

  const closeDetailsBook = () => {
    setSelectedBook(null)
    setIsOpenDetailsBook(false)
  }

  useEffect(() => {
    fetchData()
  }, [textSearch])

  return (
    <div className="bg-[--colorPrim] min-h-screen">
      <div className="container mx-auto w-18/12 md:w-8/12">
        <h1 className="font-extrabold text-4xl mb-4 text-center"
        >Library_app</h1>
        <div className="mx-0">
          <SearchBar
            textoAbuscar={textSearch}
            changeTextSearch={changeTextSearch}
          />
        </div>
        <CardBook allBooks={booksStatus} setDetailsBooks={openDetailsModal} />
      </div>
      {selectedBook && (
        <DetailsBook book={selectedBook} closeDetailsBook={closeDetailsBook} />
      )}
      <Footer />
    </div>
  )
}

export default App