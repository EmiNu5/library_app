import { useEffect, useState } from 'react'
import './App.css'
import { getLibros } from './services/book.js'

import SearchBar from './components/SearchBar'
import CardBook from './components/CardBook'
import DetailsBook from './components/DetailsBook'
import PageNotFound from './components/PageNotFound'

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
      <div className="py-2">
        <h1 className="font-extrabold text-4xl">Library_app</h1>
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
    </div>
  )
}

export default App
