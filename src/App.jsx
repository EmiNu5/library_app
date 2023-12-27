import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CardBook from './components/CardBook'
import { getLibros } from './services/book.js'

function App() {
  const [librosStatus, setLibrosStatus] = useState([])
  const [textoBusqueda, setTextoBusqueda] = useState('')

  const fetchData = () => {
    const librosSet = getLibros(textoBusqueda)
    setLibrosStatus(librosSet)
  }
  const cambioTextoBusqueda = (value) => {
    setTextoBusqueda(value)
  }

  useEffect(() => {
    fetchData()
  }, [textoBusqueda])

  return (
    <>
      <div className="bg-[--colorPrim] min-h-screen">
        <h1 className="font-extrabold text-4xl">Librery_app</h1>
        <div className="mx-0">
          <SearchBar
            textoAbuscar={textoBusqueda}
            cambioTextoBusqueda={cambioTextoBusqueda}
          />

        <CardBook allBooks={librosStatus} />
        </div>
      </div>
    </>
  )
}

export default App
