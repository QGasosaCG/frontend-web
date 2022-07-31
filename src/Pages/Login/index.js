import React, { useState } from "react";
import * as S from "./style";
import id from "../../Assets/id.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
  };

  return (
    <S.Container id="container">
      <S.Logo src={id} alt="logo" className="logo" />
      <S.Login id="login">
        <S.Title className="title">Faça o seu Login:</S.Title>
        <form className="form" onSubmit={HandleSubmit}>
          <div className="field">
            <S.Input
              placeholder="E-mail"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <S.Input
              placeholder="Senha"
              type="password"
              name="passowrd"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <S.Button type="submit" className="actions">
            Entrar
          </S.Button>
        </form>
      </S.Login>
    </S.Container>
  );
}

export default Login;
