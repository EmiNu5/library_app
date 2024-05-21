import { useContext } from 'react'
import { Context } from '../context/Context'

const Cart = () => {
    const { cart, count, removeFromCart } = useContext(Context)

    return (
        <>
            <h2>Carrito</h2>
            <table className=''>
                <thead>
                    <tr>
                        <th>Libro</th>
                        <th>Autor</th>
                        <th>Cantidad</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button onClick={() => removeFromCart(book)}>
                                    Remover
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h3>Total de Libros: {count}</h3>
            </div>
        </>
    )
}

export default Cart