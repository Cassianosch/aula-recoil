/* eslint-disable import/no-anonymous-default-export */
import { useCallback } from "react";
import { sessionServices } from "../services/sessao";
import { SetterOrUpdater, useRecoilState } from "recoil";

export default () => {
  const { _pegarUsuario } = sessionServices();

  const handleSignin = useCallback((data) => {
    localStorage.setItem("aulaRecoil.token", data.token);
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
