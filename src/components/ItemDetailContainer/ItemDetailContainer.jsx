import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const numericId = Number(id);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("¡No se encontró el producto!");
        }
        return response.json();
      })
      .then((data) => {
        const found = data.find((product) => product.id === numericId);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("¡Producto no encontrado!");
        }
      })
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
