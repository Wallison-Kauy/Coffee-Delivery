import { useContext } from "react";
import { Coffes } from "../../components/Coffes/Index";
import { CoffesCheck } from "../../components/CoffesCheck";
import { CoffesContext } from "../../contexts/CoffesContext";
import { Wrapper, Container } from "./styles";
import divider from "../../assets/divider.png";

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
        <div className="form"></div>
        <div className="cafesSelecionados">
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
              <button>
                CONFIRMAR PEDIDO
              </button>
            </div>
        </div>
      </Container>
    </Wrapper>
  );
}
