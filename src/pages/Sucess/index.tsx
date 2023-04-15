import { Wrapper,Container } from "./style";
import sucess from "../../assets/sucess.png"
import Local from "../../assets/local.png"
import timer from "../../assets/timer.png"
import money from "../../assets/money.png"

export function Sucess() {
  return (
    <Wrapper>
      <Container >
        <div className="informacoes">
          <h1>Uhu! Pedido confirmado</h1>
          <span> Agora é só aguardar que logo o café chegará até você</span>
          <div className="info">
            <div>
              <img src={Local} alt="" />
              <p>Entrega em Rua João Daniel Martinelli, 102, Farrapos - Porto Alegre, RS</p>
            </div>
            <div>
              <img src={timer} alt="" />
              <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min </p>
              </div>
            </div>
            <div>
              <img src={money} alt="" />
              <div>
              <p>Pagamento na entrega</p>
              <p>Cartão de Crédito</p>
              </div>
            </div>
          </div>
        </div>
        <div className="imagembanner">  
          <img src={sucess} alt="carrinho de sucesso" />
        </div>
      </Container>
    </Wrapper>
  );
}
