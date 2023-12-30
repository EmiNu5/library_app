import { useEffect, useState } from 'react'
import './App.css'

import SearchBar from './components/SearchBar'
import CardBook from './components/CardBook'
import DetailsBook from './components/DetailsBook'

import { getLibros } from './services/book.js'

const App = () => {
  const [booksStatus, setbooksStatus] = useState([])
  const [textSearch, setTextSearch] = useState('')
  const [selected, setSelected] = useState(null)

  const openDetails = index => {
    setSelected(index)
  }

  const fetchData = () => {
    const librosSet = getLibros(textSearch)
    setbooksStatus(librosSet)
  }
  const changeTextSearch = (value) => {
    setTextSearch(value)
  }

  useEffect(() => {
    fetchData()
  }, [textSearch])

  return (
    <>
      <div className="bg-[--colorPrim] min-h-screen">
        <div className="py-2">
          <h1 className="font-extrabold text-4xl">Library_app</h1>
          <div className="mx-0">
            <SearchBar
              textoAbuscar={textSearch}
              changeTextSearch={ changeTextSearch }
            />
        </div>
        <CardBook
          allBooks={ booksStatus } 
          openDetails={ openDetails }
        />
        </div>
        <DetailsBook
          selected={ selected }
        />
      </div>
    </>
  )
}

export default App
