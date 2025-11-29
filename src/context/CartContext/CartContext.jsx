// src/context/CartContext/CartContext.jsx

import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar item al carrito
  // Espera un objeto producto que ya puede traer "quantity"
  const addItem = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    const quantity = product.quantity ?? 1;

    if (exist) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity }]);
    }
  };

  // Eliminar por id
  const deleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Total de items
  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Total a pagar
  const total = () => {
    const t = cart.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.quantity),
      0
    );
    return Math.round(t * 100) / 100;
  };

  // Checkout SIMULADO (como el de tu compañera, sin MockAPI)
  const checkout = () => {
    if (!cart.length) return;

    const orderId = Date.now().toString(); // id "falso" de orden
    console.log("[CHECKOUT] Orden generada:", {
      id: orderId,
      items: cart,
      total: total(),
    });

    alert(
      `¡Compra realizada con éxito! Número de orden: ${orderId}\nTotal: $${total()}`
    );

    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        deleteItem,
        clearCart,
        total,
        getTotalItems,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
