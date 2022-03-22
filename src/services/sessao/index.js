const _login = async (dados) => {
  try {
    console.log(dados);
    const data = {
      jwt: "81370fad0ij9-ni0f39-1D3D1-J9#B8`028hd180",
      user: {
        id: 1,
        username: "teste",
        email: "cassiano@scheidemantel.com.br",
      },
    };
    return data;
  } catch (err) {
    throw err;
  }
};

const _pegarUsuario = async (token) => {
  try {
    console.log(token);
    const data = {
      id: 1,
      username: "teste",
      email: "cassiano@scheidemantel.com.br",
    };
    return data;
  } catch (err) {
    throw err;
  }
};

export const sessionServices = {
  _login,
  _pegarUsuario,
};
