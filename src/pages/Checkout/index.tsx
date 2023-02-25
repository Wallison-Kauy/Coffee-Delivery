
import { useContext } from "react";
import { Coffes } from "../../components/Coffes/Index";
import { CoffesContext } from "../../contexts/CoffesContext";
import { Wrapper } from "./styles";

export function Checkout (){
  const { coffes, removeCount, addCount } = useContext(CoffesContext);

  function HandleCountRemove(id: any): any {
    removeCount(id);
  }

  function HandleCountAdd(id: any): any {
    addCount(id);
  }

  return(
    <Wrapper>
     {coffes.filter((coffe) => coffe.count > 0)
      .map((coffe) => (
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
             isShopPage={true}
           />
         ))
         }
    </Wrapper>
  )
}