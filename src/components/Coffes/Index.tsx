import { Wrapper } from "./styles";
import coffe from '../../assets/coffes/coffe.png'
import carrinho from '../../assets/carrinho2.svg'
import menos from '../../assets/menos.svg'
import mais from '../../assets/mais.svg'


export function Coffes (){
  return (
    <Wrapper>
      <img src={coffe} alt="" />
      <div className="tags">
        <div> <p>TRADICIONAL</p> </div>
        <div> <p>COM LEITE</p> </div>
        <div> <p>GELADO</p> </div>
      </div>
      <div className="description">
        <h2>Expresso Tradicional</h2>
        <p>
        O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <div className="infos">
        <p>R$ <span>9,90</span> </p>
        <div className="count">
          <a href="">
            <img src={menos} alt="" />
          </a>
          <p>1</p>
          <a href="">
            <img src={mais} alt="" />
          </a>
        </div>
        <a className="carrinho" href="">
         <img src={carrinho} alt="" />
        </a>
      </div>
    </Wrapper>
  )
}