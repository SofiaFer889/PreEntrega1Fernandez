import './css/Cart.css'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div class="card text-center">
                <div class="card-body">
                    <h1 class="card-title">El carrito esta vacio</h1>
                    <Link to="/" className="btn btn-outline-light">Productos</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='btn btn-outline-light'>Vaciar Carrito</button>
            <Link to='/checkout' className='btn btn-outline-light'>Checkout</Link>
        </div>
    )
}

export default Cart