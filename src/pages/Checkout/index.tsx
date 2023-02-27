
import { useContext } from "react";
import { Coffes } from "../../components/Coffes/Index";
import { CoffesCheck } from "../../components/CoffesCheck";
import { CoffesContext } from "../../contexts/CoffesContext";
import { Wrapper } from "./styles";

export function Checkout (){
  const { coffes, removeCount, addCount,total } = useContext(CoffesContext);

  function HandleCountRemove(id: any): any {
    removeCount(id);
  }

  function HandleCountAdd(id: any): any {
    addCount(id);
  }

  return(
    <Wrapper>
      <h1>{total}</h1>
     {coffes.filter((coffe) => coffe.count > 0)
      .map((coffe) => (
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
           />
         ))
         }

    </Wrapper>
  )
}