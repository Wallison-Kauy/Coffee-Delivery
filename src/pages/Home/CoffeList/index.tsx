import { useContext, useState } from "react";
import { Coffes } from "../../../components/Coffes/Index";
import { Container, Wrapper } from "./style";
import { CoffesContext } from "../../../contexts/CoffesContext";

export function CoffeList() {
  const { coffes, removeCount, addCount } = useContext(CoffesContext);

  function HandleCountRemove(id: any): any {
    console.log("chamando pra jogar no contexto -----> id é:", id);
    removeCount(id);
  }

  function HandleCountAdd(id: any): any {
    console.log("chamando pra jogar no contexto -----> id é:", id);
    addCount(id);
  }

  return (
    <Wrapper>
      <h2>Nossos cafés</h2>

      <Container>
        {coffes.map((coffe) => (
          <Coffes
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
          />
        ))}
      </Container>
    </Wrapper>
  );
}
