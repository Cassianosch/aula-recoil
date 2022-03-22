import { sessionServices } from "../services/sessao";

export default () => {
  const { _getMe } = sessionServices();
  return "ok";
};
