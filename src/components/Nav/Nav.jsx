import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to={"/"} className="nav__link">
            <img src="../../../favicon.png" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/category/utensilios-ecologicos"} className="nav__link">
            Utensilios ecológicos
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/category/cuidado-personal"} className="nav__link">
            Cuidado personal
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/category/higiene-personal"} className="nav__link">
            Higiene personal
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/category/accesorios"} className="nav__link">
            Accesorios
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/cart"} className="nav__link">
            Carrito
          </Link>
          {getTotalItems() > 0 && (
            <span className="nav__in-cart">({getTotalItems()})</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
