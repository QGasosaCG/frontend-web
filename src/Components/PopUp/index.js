import React from "react";
import * as S from "./style";
import VectorFechar from "../../Assets/VectorFechar.png";

import { useUserContext } from "../../Hooks/useUserContext";

function PopUp() {
  const { addUser, setAddUser } = useUserContext(false);

  function adicionaUsuario(e) {
    e.preventDefault();
    setAddUser(!addUser);
  }

  function mostrarSenha(event) {
    event.preventDefault();
    var senha = document.getElementById("senha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }

  return (
    <S.Container>
      <S.Section>
        <S.Titulo>
          <div id="nome">
            <h3> Adicionar Usuário </h3>
          </div>

          <div id="botao">
            <button onClick={adicionaUsuario}>
              {" "}
              <img src={VectorFechar} alt="Fechar" />{" "}
            </button>
          </div>
        </S.Titulo>
        <S.Form>
          <S.Email>
            <input type="email" placeholder="E-mail" />
          </S.Email>
          <S.Senha>
            <input type="password" placeholder="Senha" id="senha" />

            <button id="senha2" onClick={mostrarSenha}>
              <svg
                width="12"
                height="9"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  inecap="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
          </S.Senha>
        </S.Form>

        <S.Botao>
          <button>Cadastrar!</button>
        </S.Botao>
      </S.Section>
    </S.Container>
  );
}

export default PopUp;
