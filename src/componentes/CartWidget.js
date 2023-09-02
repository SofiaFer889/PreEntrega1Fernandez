import './css/CartWidget.css'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget'>
            <img className="CartImg" src='/img/carrito.png' alt='cart-widget'/>
            {totalQuantity()}
        </Link>
    )
}

export default CartWidget