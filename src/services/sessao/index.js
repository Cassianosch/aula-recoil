const _login = async (dados) => {
  try {
    const data = {
      jwt: "81370fad0ij9-ni0f39-1D3D1-J9#B8028hd180",
      user: {
        id: 1,
        username: "Cassiano Scheidemantel",
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
    const data = {
      jwt: "81370fad0ij9-ni0f39-1D3D1-J9#B8028hd180",
      user: {
        id: 1,
        username: "Cassiano Scheidemantel",
        email: "cassiano@scheidemantel.com.br",
      },
    };
    return data;
  } catch (err) {
    throw err;
  }
};

export const sessionServices = () => ({
  _login,
  _pegarUsuario,
});
