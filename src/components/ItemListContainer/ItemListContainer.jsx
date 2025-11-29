// src/components/ItemListContainer/ItemListContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/products";
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts(category)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <section className="container">

      <h1>{titulo}</h1>

      {/* 🔥 LOGO DE PANADERÍA */}
      <div className="logo-container">
        <img
          src="/images/logo-panaderia.png"
          alt="Logo Panadería"
          className="logo-panaderia"
        />
      </div>

      <ItemList lista={products} />
    </section>
  );
};
