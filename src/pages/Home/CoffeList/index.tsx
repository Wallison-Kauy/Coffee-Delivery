import { useContext, useState } from "react";
import { Coffes } from "../../../components/Coffes/Index";
import { Wrapper } from "./style";
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
      <Coffes
        id={coffes[0].id}
        titulo={coffes[0].titulo}
        resumo={coffes[0].resumo}
        price={coffes[0].price}
        count={coffes[0].count}
        addCount={() => HandleCountAdd(coffes[0].id)}
        removeCount={() => HandleCountRemove(coffes[0].id)}
        img={coffes[0].img}
      />
    </Wrapper>
  );
}
