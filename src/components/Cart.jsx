import { useContext } from 'react';
import { Context } from '../context/Context';

const Cart = () => {
    const { count } = useContext(Context);

    return (
        <div className="cart">
            <h2>Carrito</h2>
            <div>
                <div>{count}</div>
            </div>
        </div>
    );
};

export default Cart;