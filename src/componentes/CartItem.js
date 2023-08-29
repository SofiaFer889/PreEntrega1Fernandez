import './css/CartItem.css'
import React, {useContext} from 'react';
import {CartContext} from './CartContext'

const CartItem = ({ id, nombre, quantity, precio }) => {
  const {removeItem} = useContext(CartContext)

  return (
    <div className='CartItem'>
      <h4>{nombre}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio: ${precio}</p>
      <p>Subtotal: ${precio * quantity}</p>
      <button className='btn btn-danger' onClick={() => removeItem(id)}>X</button>
    </div>
  );
};

export default CartItem;
