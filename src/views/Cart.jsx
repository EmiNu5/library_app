import { useContext } from 'react'
import { Context } from '../context/Context'
import Navbar from 'src/components/Navbar'

const Cart = () => {
    const { cart, count, addToCart, removeFromCart } = useContext(Context)
    const totalPrice = cart.reduce((sum, book) => sum + (book.quantity * book.price), 0)

    return (
        <div className="bg-[--colorPrim] min-h-screen">
        <Navbar />
        <h2 className="title">Carrito</h2>
            <div className='flex flex-col'>
                <table>
                    <thead className='border-b border-neutral-300 font-medium'>
                        <tr>
                            <th scope='col' className='px-6 py-2'>Libro</th>
                            <th scope='col' className='px-6 py-2'>Autor</th>
                            <th scope='col' className='px-6 py-2'>Cantidad</th>
                            <th scope='col' className='px-6 py-2'>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(book => (
                            <tr className='border-b border-neutral-200 transition duration-300 ease-in-out' key={book.id}>
                                <td className='whitespace-nowrap px-6 py-2'>{book.title}</td>
                                <td className='whitespace-nowrap px-6 py-2'>{book.author}</td>
                                <td className='whitespace-nowrap px-6 py-2 text-center'>
                                    <button className='btn py-1' onClick={() => addToCart(book)}>+</button>
                                    {book.quantity}
                                    <button className='btn py-1' onClick={() => removeFromCart(book)}>-</button>
                                </td>
                                <td className='whitespace-nowrap px-6 py-2'>{book.quantity*book.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h3 className='py-6 border border-neutral-300 text-center text-lg font-medium'>Total de Libros: {count}</h3>
                <h3 className='py-6 border border-neutral-300 text-center text-lg font-medium'>Total de Libros: {totalPrice}</h3>
            </div>
        </div>
    )
}

export default Cart