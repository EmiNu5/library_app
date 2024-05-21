import { useContext } from "react"
import { Context } from "src/context/Context"

/* eslint-disable react/prop-types */
const DetailsBook = (props) => {
  const { book, closeDetailsBook } = props
  const { addToCart } = useContext(Context)
  return (
    <div className="px-3">
    <div className="fixed inset-0 bg-stone-900 bg-opacity-70 backdrop-blur-sm flex flex-col text-center justify-center">
      <button
        className="text-white font-extrabold px-20 py-4 ml-auto text-xl"
        onClick={closeDetailsBook}
      >x</button>
      <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 mx-24">
        <h2 className="title">{book.title}</h2>
        <p className="font-semibold text-l">{book.author}</p>
        <p className="">{book.sinopsis}</p>
        <button type="button" className='btn' onClick={() => addToCart(book)}>añadir a carrito</button>
      </div>
    </div>
  </div>
  )
}

export default DetailsBook
