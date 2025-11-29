import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import "../adminComponents/ProductFormContainer/ProductFormContainer.css";

export const Login = () => {
  const [userForm, setUserForm] = useState({ name: "", password: "" });
  const { user, login } = useAuthContext();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/admin/registration-products" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(userForm.name, userForm.password);

    if (success) {
      navigate("/admin/registration-products");
    } else {
      alert("Nombre o contraseña incorrectos");
      setUserForm({ name: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={userForm.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};
