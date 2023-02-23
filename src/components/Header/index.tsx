import logo from "../../assets/Logo.svg";
import localizacao from "../../assets/localizacao.svg";
import carrinho from "../../assets/carrinho.svg";
import { HeaderContainer } from "./styles";
import { useContext } from "react";
import { CoffesContext } from "../../contexts/CoffesContext";

export function Header() {
  const { qtdCoffesCount } = useContext(CoffesContext);

  return (
    <HeaderContainer>
      <div className="container">
        <img src={logo} />
        <div>
          <a href="">
            <img src={localizacao} alt="" />
            <p>Porto Alegre,RS</p>
          </a>

          <a href="" className="carrinho">
            <img src={carrinho} alt="" />
          </a>
          <div className="circulo">
            {qtdCoffesCount.length > 0 && <p>{qtdCoffesCount.length}</p>}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
