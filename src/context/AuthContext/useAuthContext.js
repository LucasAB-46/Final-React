// src/context/AuthContext/useAuthContext.js
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuthContext = () => {
  return useContext(AuthContext);
};
