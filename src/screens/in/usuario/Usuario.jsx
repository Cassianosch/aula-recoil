import React from "react";
import useSession from "../../../hooks/useSession";
import { Link } from "react-router-dom";

export const UsuarioPage = () => {
  const { handleSignout } = useSession();
  return (
    <>
      <h1>Usuario</h1>
      <h3>Usuario: {`Cssss`}</h3>
      <Link to="/home">Voltar para home</Link>
      <br />
      <a href="#" onClick={handleSignout}>
        Sair
      </a>
    </>
  );
};
