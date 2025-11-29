import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// IMPORTS DE CONTEXTOS
// 1. Corregida la ruta de importación de CartProvider (asumiendo que está en CartContext.jsx/js)
import { CartProvider } from "./context/CartContext/CartContext"; 

// 2. Corregida la ruta de importación de AuthProvider para apuntar al archivo correcto
//    (Tu componente AuthProvider está en AuthProvider.jsx, NO en AuthContext.jsx/js)
import { AuthProvider } from "./context/AuthContext/AuthProvider.jsx"; 
// NOTA: Si tu archivo se llama AuthProvider.js (sin 'x'), cambia la extensión a .js

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);