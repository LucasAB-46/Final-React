// src/components/RutaProtegida/RutaProtegida.jsx

import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";

export const RutaProtegida = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    // si no hay sesión, redirigimos al login
    return <Navigate to="/login" replace />;
  }

  return children;
};
