import { useContext } from "react"
import CartContext from "../context/CartContext"

const CartItem = (event) => {
    const { dispatch } = useContext(CartContext)
    const removeFromCart = () => {
        dispatch({ type: 'REMOVE_FROM_CART', id: item.id })
    }
    const updateQuantity = () => {
        const quantity = parseInt(event.target.value, 10)
        dispatch({ type: 'UPDATE_QUANTITY', id: item.id, quantity })
    }

    return(
        <div className="cart-item">
            <h3>{ item.name }</h3>
            <p>{ item.price }</p>
            <input type="number" value={item.quantity} onChange={updateQuantity} min="1" />
            <button type="button" onClick={removeFromCart}>-</button>
        </div>
    )
}

export default CartItem