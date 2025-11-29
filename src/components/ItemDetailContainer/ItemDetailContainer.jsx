import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../services/products";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const numericId = Number(id);

  useEffect(() => {
    getProductsById(numericId)
      .then((data) => setDetail(data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};
