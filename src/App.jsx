// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { Login } from "./components/Login/Login";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer"; 
// 👆 ajustá la ruta si tu archivo está en otra subcarpeta

function App() {
  return (
    <>
      <Nav />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<ItemListContainer titulo="Bienvenidos" />}
        />

        {/* Categorías (Salado / Dulce) */}
        <Route
          path="/category/:category"
          element={<ItemListContainer titulo="Bienvenidos" />}
        />

        {/* Detalle de producto */}
        <Route path="/detail/:id" element={<ItemDetailContainer />} />

        {/* Carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta protegida para el alta de productos */}
        <Route
          path="/admin/productos/nuevo"
          element={
            <RutaProtegida>
              <ProductFormContainer />
            </RutaProtegida>
          }
        />

        {/* 404 */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
