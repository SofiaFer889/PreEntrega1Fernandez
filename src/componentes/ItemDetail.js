import "./ItemDetail.css"
import ItemCount from "./ItemCount"

const ItemDetail = ({ id, nombre, categoria, descripcion, precio, stock }) => {
    return (
      <article className="CardItem card"> {}
        <header className="Header">
          <h2 className="ItemHeader">{nombre}</h2>
        </header>
        <section>
          <p className="info">Categoria: {categoria}</p>
          <p className="info">Descripcion: {descripcion}</p>
          <p className="info">Precio: ${precio}</p>
        </section>
        <footer className="ItemFooter">
          <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
        </footer>
      </article>
    );
  };

export default ItemDetail