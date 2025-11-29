import "./Item.css";

export const Item = ({ imageUrl, name, description, price, children }) => {
  return (
    <article className="product-item">
      <img src={imageUrl} alt={description} />
      <h2 className="product-title">{name}</h2>
      <p>Descripción: {description}</p>
      <p>Precio: ${price}</p>
      {children}
    </article>
  );
};
