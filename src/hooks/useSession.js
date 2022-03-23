/* eslint-disable import/no-anonymous-default-export */
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { sessionServices } from "../services/sessao";
import { sessionStore } from "../store/session";

export default () => {
  const [session, setSession] = useRecoilState(sessionStore);

  const { _pegarUsuario } = sessionServices();

  const handleSignin = useCallback(
    (data) => {
      setSession(data);
      localStorage.setItem("aulaRecoil.token", data.jwt);
    },
    [setSession]
  );

  const handleSignout = useCallback(() => {
    setSession(null);
    localStorage.removeItem("aulaRecoil.token");
  }, [setSession]);

  const handleCheckLogged = useCallback(async () => {
    if (localStorage.getItem("aulaRecoil.token")) {
      const data = await _pegarUsuario();

      handleSignin(data);
    }
  }, [_pegarUsuario, handleSignin]);

  return {
    session,
    handleSignin,
    handleSignout,
    handleCheckLogged,
  };
};
