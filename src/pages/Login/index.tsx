import * as S from "./styles"

import LogoSacflow from "../../assets/sacflow-logo.png"

function Login() {
  return (
    <S.Wrapper>
       <div>
        <img src={LogoSacflow} alt="Logo Sacflow" />
      </div>
        <S.LoginForm>
          <form action="">
          <h1>Entrar</h1>
            <input required placeholder="E-mail"/>
            <input required placeholder="Senha"/>
            <button type="submit">Próximo</button>
          </form>
        </S.LoginForm>
      
     
    </S.Wrapper>
  );
}

export default Login;