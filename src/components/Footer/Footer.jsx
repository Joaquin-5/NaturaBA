import "./Footer.css"

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Todos los derechos reservados © {year}</p>
    </footer>
  );
};
