import { useState } from "react";
import { Coffes } from "../../../components/Coffes/Index";
import { Wrapper } from "./style";

export function CoffeList(){

  const [cont,Setcont] = useState(0)

  function HandleCountRemove(){
    Setcont(cont-1)
  }

  function HandleCountAdd(){
    Setcont(cont+1)
  }

  return (
    <Wrapper> 
      <h2>Nossos cafés</h2>
      <Coffes 
        id="12"
        titulo="é 1 real a palma da banana"
        resumo="testest"
        price={9.99}
        count={cont}
        addCount={HandleCountAdd}
        removeCount={HandleCountRemove}
      />
    </Wrapper>
  )
}