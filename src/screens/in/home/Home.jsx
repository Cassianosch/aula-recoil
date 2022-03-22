import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/usuario">Ir para perfil de usuário</Link>
    </>
  );
};
