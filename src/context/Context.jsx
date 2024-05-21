import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

// Crea el contexto
export const Context = createContext()

// Crea el proveedor
export const Provider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)

    const addToCart = (book) => {
        setCart(prevCart => {
            const bookInCart = prevCart.find(item => item.id === book.id)
            if (bookInCart) {
                return prevCart.map(item => 
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            } else {
                return [...prevCart, { ...book, quantity: 1 }]
            }
        })
        setCount(count + 1)
    }

    const removeFromCart = (book) => {
        setCart(prevCart => {
            const bookInCart = prevCart.find(item => item.id === book.id)
            if (bookInCart && bookInCart.quantity > 1) {
                return prevCart.map(item => 
                    item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item
                )
            } else {
                return prevCart.filter(item => item.id !== book.id)
            }
        })
        setCount(count - 1)
    }
    const value = {
        cart,
        count,
        addToCart,
        removeFromCart
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
}

// Exporta por defecto el proveedor para uso fácil
export default Provider