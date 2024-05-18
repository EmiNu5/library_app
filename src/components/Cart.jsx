import { useContext } from "react"
import CartContext from "../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
  const { cart } = useContext(CartContext)
  const total = cart.reduce((acc, book) => acc + book.price * book.quantity, 0)
  return (
    <div className="cart">
      <h2>Carrito</h2>
      { cart.length === 0 ? <p>Carrito vacio</p> : (
        <>
          { cart.map(book => <CartItem key={book.id} book={book} /> )}
          <h3>Total: ${ total.toFixed(2) }</h3>
        </>
      )}
    </div>
  )
}

export default Cart
