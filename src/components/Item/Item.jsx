import "./Item.css";

export const Item = ({ image, name, description, price, children }) => {
  return (
    <article className="product-item">
      <img src={image} alt={description} />
      <h2 className="product-title">{name}</h2>
      <p>Descripción: {description}</p>
      <p>Precio: ${price}</p>
      {children}
    </article>
  );
};
