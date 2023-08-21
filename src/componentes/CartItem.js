import React from 'react';

const CartItem = ({ id, nombre, quantity, precio }) => {
  return (
    <div>
      <h4>{nombre}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
};

export default CartItem;
