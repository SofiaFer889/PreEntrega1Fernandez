import "./css/ItemDetail.css"
import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

const ItemDetail = ({ id, nombre, categoria, descripcion, precio, stock, imag }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, nombre, precio
    }

    addItem(item, quantity)
  }

  return (
    <article className="CardItem card">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
        <img src={`/img/${imag}`} alt={nombre} className="img card-img-top" />
      </header>
      <section>
        <p className="info">Categoria: {categoria}</p>
        <p className="info">Descripcion: {descripcion}</p>
        <p className="info">Precio: ${precio}</p>
      </section>
      <footer className="ItemFooter">
        {
          quantityAdded > 0 ? (
            <Link to='/cart' className="Opcion">Terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
          )
        }
      </footer>
    </article>
  );
};

export default ItemDetail