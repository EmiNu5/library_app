import { useContext } from "react"
import CartContext from "../context/Context"

const Product = ({ product }) => {
    const { dispatch } = useContext(CartContext)
    const addToCart = () => dispatch({ type: 'ADD_TO_CART', product })

    return(
        <div className="product">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={addToCart}>+</button>
        </div>
    )
}

export default Product