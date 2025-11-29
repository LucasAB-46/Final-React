// src/components/Item/Item.jsx
import "./Item.css";
import { useCartContext } from "../../context/CartContext/CartContext";


export const Item = ({ name, price, description, imageUrl, children }) => {
  // Si este componente usara children ni botones que generen conflictos,
  // podrían envolver acá con Link (agregando el uso de props "id")

  return (
    <article className="product-item">
      <img src={imageUrl} alt={description} />
      <h2 className="product-title">{name}</h2>
      <p>Precio: ${price}</p>
      <p>Descripción: {description}</p>
      {children}
    </article>
  );
};
