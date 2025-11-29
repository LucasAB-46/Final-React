// src/components/Login/Login.jsx

import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import "./Login.css";

export const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const { user, login } = useAuthContext();
  const navigate = useNavigate();

  // Si ya hay sesión, vamos directo al admin
  if (user) {
    return <Navigate to="/admin/productos/nuevo" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(form.username, form.password);

    if (result.ok) {
      navigate("/admin/productos/nuevo");
    } else {
      alert(result.message || "Credenciales inválidas");
      setForm({ username: "", password: "" });
    }
  };

  return (
    <section className="login-container">
      <h2>Login de administrador</h2>
      <p>
        Usuario: <strong>admin</strong> | Contraseña: <strong>1234</strong>
      </p>

      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-panaderia">
          Iniciar sesión
        </button>
      </form>
    </section>
  );
};
