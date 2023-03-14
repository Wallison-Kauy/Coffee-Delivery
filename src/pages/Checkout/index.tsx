import { useContext } from "react";
import { Coffes } from "../../components/Coffes/Index";
import { CoffesCheck } from "../../components/CoffesCheck";
import { CoffesContext } from "../../contexts/CoffesContext";
import { Wrapper,Container } from "./styles";
import divider from "../../assets/divider.png";

export function Checkout() {
  const { coffes, removeCount, addCount, total } = useContext(CoffesContext);

  function HandleCountRemove(id: any): any {
    removeCount(id);
  }

  function HandleCountAdd(id: any): any {
    addCount(id);
  }

  return (
    <Wrapper>
      <Container> 
        <div className="form"></div>
        <div className="cafesSelecionados">
          {coffes
            .filter((coffe) => coffe.count > 0)
            .map((coffe) => (
              <>
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
                  isShopPage={true}
                  countTotal={coffe.countTotal}
                />
                <img src={divider} alt="" />
              </>
            ))}
          <h1>Total: </h1>
          <h1>R$ {total}</h1>
        </div>
      </Container>
    </Wrapper>
  );
}
