import { useState } from 'react'

const Cart = ({ allBooks, updateQuantity }) => {
  const [cartBooks, setCartBooks] = useState(
    allBooks.map((book) => ({ ...book, quantity: 1 })),
  )

  const handleUpdateQuantity = (index, e) => {
    setCartBooks((prevCartBooks) => {
      const updatedBooks = [...prevCartBooks]
      updatedBooks[index].quantity += e
      return updatedBooks
    })
  }

  return (
    <div id="cart">
      <ul className="flex flex-row">
        {cartBooks.map((cartBook, index) => (
          <li key={index} className="text-center h-3 py-1 w-full">
            <strong className="font-extrabold w-8 text-left">
              {cartBook.title}
            </strong>
            <button
              className="btn"
              onClick={() => handleUpdateQuantity(index, 1)}
            >
              +
            </button>
            <span className="w-2">{cartBook.quantity}</span>
            <button
              className="btn"
              onClick={() => handleUpdateQuantity(index, -1)}
            >
              -
            </button>
            <p>${cartBook.price}</p> {/* Reemplaza con el precio real */}
            <button
              className="btn"
              onClick={() =>
                setCartBooks((prevCartBooks) => {
                  const updatedBooks = [...prevCartBooks]
                  updatedBooks[index].quantity = 0
                  return updatedBooks
                })
              }
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div className="" id="">
        <p>Total: </p>
        <span className="">20</span>
        <span className="">
          $ <strong className="">400</strong>
        </span>
      </div>
    </div>
  )
}

export default Cart
