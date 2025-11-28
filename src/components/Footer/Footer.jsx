import "./Footer.css"

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>NaturaBA - Todos los derechos reservados © {year}</p>
    </footer>
  );
};
