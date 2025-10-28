import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ list }) => {
  return (
    <div className="item-list">
      {list.length ? (
        list.map((product) => (
          <Link
            to={`/detail/${product.id}`}
            key={product.id}
            className="item-list__link"
          >
            <Item {...product}>
              <button className="item-list__button">Ver más</button>
            </Item>
          </Link>
        ))
      ) : (
        <p className="item-list__empty">¡No hay productos!</p>
      )}
    </div>
  );
};
