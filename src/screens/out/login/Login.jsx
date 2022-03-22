import React from 'react'

export const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <input type="text" name="usuario" id="" />
        <input type="text" name="password" id="" />
        <button type="submit">Acessar</button>
      </form>
      <a href="/cadastro">Cadastrar</a>
    </>
  )
}
