// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/products"; 
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams(); // :id viene del Route

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setDetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <main className="detail-container">
      {detail ? <ItemDetail detail={detail} /> : <p>Cargando...</p>}
    </main>
  );
};
