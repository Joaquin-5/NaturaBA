import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import "../../styles/_shared-list.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hubo un problema al buscar los productos");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="item-list-container">
      <h1 className="item-list-container__title">NaturaBA</h1>
      <ItemList list={products} />
    </section>
  );
};
