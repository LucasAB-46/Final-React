// src/context/AuthContext/AuthProvider.jsx
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem("session");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  // Login SIMULADO: admin / 1234
  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      const session = { username };
      setUser(session);
      sessionStorage.setItem("session", JSON.stringify(session));
      return { ok: true };
    }
    return { ok: false, message: "Credenciales inválidas" };
  };

  const logout = () => {
    sessionStorage.removeItem("session");
    setUser(null);
    alert("Cerrando sesión");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
