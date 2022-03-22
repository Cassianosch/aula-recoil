/* eslint-disable import/no-anonymous-default-export */
import { useCallback } from "react";
import { sessionServices } from "../services/sessao";

export default () => {
  const { _pegarUsuario } = sessionServices();

  const handleSignin = useCallback((data) => {
    console.log("handleSignin", data);
    localStorage.setItem("aulaRecoil.token", data.jwt);
  }, []);

  const handleSignout = useCallback(() => {
    localStorage.removeItem("aulaRecoil.token");
  }, []);

  const handleCheckLogged = useCallback(async () => {
    if (localStorage.getItem("aulaRecoil.token")) {
      const data = await _pegarUsuario();

      handleSignin(data);
    }
  }, [_pegarUsuario, handleSignin]);

  return {
    handleSignin,
    handleSignout,
    handleCheckLogged,
  };
};
