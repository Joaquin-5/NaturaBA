import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
    const exist = cart.some((product) => product.id === id);
    return exist;
  };

  const addItem = (item) => {
    if (exists(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      alert("Agregado al carrito");
    } else {
      setCart([...cart, item]);
      alert(`Se agregó ${item.name} al carrito`);
    }
  };

  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert("Producto eliminado");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  };

  const total = () => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    return Math.round(total * 100) / 100;
  };

  const values = {
    cart,
    addItem,
    clearCart,
    getTotalItems,
    deleteItem,
    total,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
