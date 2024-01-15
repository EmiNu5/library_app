import { useEffect, useState } from 'react'
// import Cart from '../views/Cart'
import { Link } from 'react-router-dom'

const DetailsBook = ({ book, closeDetailsBook, addBookToCart }) => {
  const [addToCart, setAddToCart] = useState([])

  const addBookToCart = book => {
    const newBook = {
      ...book,
      quantity: 1,
    }
    setAddToCart([...addToCart, newBook])
  }

  return (
    <div className="px-3">
      <div className="fixed inset-0 bg-stone-900 bg-opacity-70 backdrop-blur-sm flex flex-col text-center justify-center">
        <button
          className="text-white font-extrabold px-20 py-4 ml-auto text-xl"
          onClick={ closeDetailsBook }
        >
          x
        </button>
        <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 mx-24">
          <h2 className="font-bold text-red-800 text-xl">{book.title}</h2>
          <p className="font-semibold text-l">{book.author}</p>
          <p className="">{book.sinopsis}</p>
          <Link to="./carrito">añadir a carrito</Link>
          <button type="button" onClick={addBookToCart}>añadir a carrito</button>
        </div>
      </div>
    </div>
  )
}

export default DetailsBook
