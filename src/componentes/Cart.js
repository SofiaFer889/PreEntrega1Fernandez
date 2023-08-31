import './css/Cart.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h1 className="card-title">El carrito está vacío</h1>
                    <Link to="/" className="btn btn-outline-light">Productos</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="Cart">
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total()}</h3>
            <div className="CartButtons">
                <button onClick={() => clearCart()} className="btn btn-outline-light">Vaciar Carrito</button>
                <Link to="/checkout" className="btn btn-outline-light">Checkout</Link>
            </div>
        </div>
    );
};

export default Cart;
