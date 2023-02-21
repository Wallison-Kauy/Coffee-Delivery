import logo from '../../assets/Logo.svg'
import localizacao from '../../assets/localizacao.svg'
import carrinho from '../../assets/carrinho.svg'
import { HeaderContainer } from './styles'


export function Header () {
  return(
    <HeaderContainer>
      <div>
        <img src={logo}/>
        <div>
            <a href="">
              <img src={localizacao} alt="" />
            <p>Porto Alegre,RS</p>
            </a>
        
            <a href="">
              <img src={carrinho} alt="" />
            </a>
        </div>
      </div>
    </HeaderContainer>
  )
}