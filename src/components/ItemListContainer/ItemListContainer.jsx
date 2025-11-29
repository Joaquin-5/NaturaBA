import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import "../../styles/_shared-list.css";
import { getProducts } from "../../services/products";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts(category)
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <section className="item-list-container">
      <h1 className="item-list-container__title">NaturaBA</h1>
      <ItemList list={products} />
    </section>
  );
};
