import logo from "../../assets/Logo.svg";
import localizacao from "../../assets/localizacao.svg";
import carrinho from "../../assets/carrinho.svg";
import { HeaderContainer } from "./styles";
import { useContext } from "react";
import { CoffesContext } from "../../contexts/CoffesContext";
import { NavLink } from "react-router-dom";

export function Header() {
  const { qtdCoffesCount } = useContext(CoffesContext);

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/" title="Home">
         <img src={logo} />
        </NavLink>
        <div>
          <a href="">
            <img src={localizacao} alt="" />
            <p>Porto Alegre,RS</p>
          </a>

          <NavLink to="carrinho" title="Carrinho de compras" className="carrinho">
            <img src={carrinho} alt="" />
          </NavLink>
          {qtdCoffesCount.length > 0 && (
            <div className="circulo">
              <p>{qtdCoffesCount.length}</p>
            </div>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
}
