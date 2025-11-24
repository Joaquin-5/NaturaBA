import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./Cart.css";

export const Cart = () => {
  const { cart, clearCart, deleteItem, total, checkout } = useCartContext();

  return (
    <section className="item-list-container">
      <h2>Carrito de Compras</h2>

      <div className="item-list">
        {cart.length ? (
          cart.map((prod) => (
            <Item key={prod.id} {...prod}>
              <span>Cantidad: {prod.quantity}</span>
              {prod.quantity > 1 && (
                <span>Subtotal: ${prod.quantity * prod.price}</span>
              )}
              <button
                className="btn"
                onClick={() => {
                  deleteItem(prod.id);
                }}
              >
                Eliminar
              </button>
            </Item>
          ))
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </div>

      {cart.length ? (
        <div className="btn-container">
          <div className="total-pay">
            <p>Total a pagar: ${total()}</p>
          </div>
          <button className="btn" onClick={checkout}>
            Finalizar compra
          </button>
          <button className="btn" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      ) : (
        <Link className="btn" to="/">
          Volver al inicio
        </Link>
      )}
    </section>
  );
};
