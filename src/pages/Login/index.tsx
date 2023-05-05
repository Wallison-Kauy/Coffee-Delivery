import * as S from "./styles";

import LogoSacflow from "../../assets/sacflow-logo.png";

function Login() {
  return (
    <S.Wrapper>
      <div>
        <img src={LogoSacflow} alt="Logo Sacflow" />
      </div>
      <S.LoginForm>
        <form action="">
          <h1>Entrar</h1>
          <input required placeholder="E-mail" />
          <input type="password" required placeholder="Senha" />
          <button type="submit">Próximo</button>
        </form>
      </S.LoginForm>
      <div>
        <span>
          Feito por <a href="https://hyerdev.com.br/">Hyerdev</a>
        </span>
      </div>
    </S.Wrapper>
  );
}

export default Login;
