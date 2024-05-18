import { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingbook = state.find(book => book.id === action.product.id)
      if (existingbook) {
        return (
            state.map(book => book.id === action.product.id ? { ...book, quantity: book.quantity + 1 } : book,
        ))
      } else {
        return [...state, { ...action.product, quantity: 1 }]
      }
    }
    case 'REMOVE_FROM_CART':
      return state.filter(book => book.id !== action.id)
    case 'UPDATE_QUANTITY':
      return (
        state.map(book => book.id === action.id ? { ...book, quantity: action.quantity } : book
      ))
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [])
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      { children }
    </CartContext.Provider>
  )
}

CartProvider.PropTypes = {
  children: PropTypes.node.isRequired,
}

export default CartContext
