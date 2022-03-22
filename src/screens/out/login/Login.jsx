import React, { useCallback } from "react";
import { sessionServices } from "../../../services/sessao";

export const LoginPage = () => {
  const { _login } = sessionServices();

  const handleLogin = useCallback(
    async (e) => {
      try {
        const sessionData = await _login({
          username: "teste",
          password: "teste",
        });
      } catch (error) {}
      e.preventDefault();
    },
    [_login]
  );

  return (
    <>
      <h1>Login</h1>
      <form>
        <input type="text" name="usuario" id="" />
        <input type="text" name="password" id="" />
        <button type="submit" onClick={handleLogin}>
          Acessar
        </button>
      </form>
      <a href="/cadastro">Cadastrar</a>
    </>
  );
};
