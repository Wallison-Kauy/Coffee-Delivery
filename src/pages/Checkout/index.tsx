import { useContext } from "react";
import { Coffes } from "../../components/Coffes/Index";
import { CoffesCheck } from "../../components/CoffesCheck";
import { CoffesContext } from "../../contexts/CoffesContext";
import { Wrapper, Container } from "./styles";
import divider from "../../assets/divider.png";
import { NavLink } from "react-router-dom";
import localizacao from "../../assets/localizacao.png";

export function Checkout() {
  const { coffes, removeCount, addCount, total, removeCart } = useContext(CoffesContext);

  function HandleCountRemove(id: any): any {
    removeCount(id);
  }

  function HandleCountAdd(id: any): any {
    addCount(id);
  }

  function HandleRemoveCart(id: any): any{
    if (removeCart) {
      removeCart(id);
    }
  }

  const totalTaxa = total + 3.5;


  return (
    <Wrapper>
      <Container>
        <div className="form">
            <h4>Complete seu pedido</h4>
          <div className="enderecoEntrega">
            <div>
            <div className="InfoEnderecoEnetrega">
              <img src={localizacao} alt="" />
              <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
              
            </div>
              
              <form action="">
                <div className="trincaporcento">
                <input type="text" placeholder="CEP" />
                </div>
                <input type="text" placeholder="RUA"/>
                <div className="trincaporcento">
                  <input type="text" placeholder="Numero"/>
                  <input type="text" placeholder="Complemento"/>
                </div>
                <div className="trincaporcento">
                  <input type="text" placeholder="Estado"/>
                  <input type="text" placeholder="Cidade"/>
                </div>
              </form>
            </div>
          </div>

          <div className="enderecoEntrega">
            <div>
            <div className="InfoEnderecoEnetrega">
              <img src={localizacao} alt="" />
              <div>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
              
            </div>
            </div>
          </div>
        </div>
        <div className="cafesSelecionados">
          <h4>Cafes Selecionados</h4>
          <div className="coffelist">
          {coffes
            .filter((coffe) => coffe.count > 0)
            .map((coffe) => (
              <div  key={coffe.id}>
                <CoffesCheck
                  key={coffe.id}
                  id={coffe.id}
                  img={coffe.img}
                  titulo={coffe.titulo}
                  tags={coffe.tags}
                  resumo={coffe.resumo}
                  price={coffe.price}
                  count={coffe.count}
                  addCount={() => HandleCountAdd(coffe.id)}
                  removeCount={() => HandleCountRemove(coffe.id)}
                  removeCart={() => HandleRemoveCart(coffe.id)}
                  isShopPage={true}
                  countTotal={coffe.countTotal}
                />
                <img src={divider} alt="" />
              </div>
            ))}
            </div>
            <div className="resumoItems">
              <div>
                <p>Total Itens:</p>
                <p>R$ {total}</p>
              </div>
              <div>
                <p>
                  Entrega:
                </p>
                <p>
                  R$ 3,50
                </p>
              </div>
              <div>
                <h3>TOTAL:</h3>
                <h3>R$ {totalTaxa}</h3>
              </div>
              <NavLink to="/sucesso" title="Confirmar pedido">
                <button className="botaoConfirma">
                  CONFIRMAR PEDIDO
                </button>
              </NavLink>
            </div>
        </div>
      </Container>
    </Wrapper>
  );
}
