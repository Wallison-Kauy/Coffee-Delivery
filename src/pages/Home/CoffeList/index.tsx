import { Coffes } from "../../../components/Coffes/Index";
import { Wrapper } from "./style";

export function CoffeList(){
  return (
    <Wrapper> 
      <h2>Nossos cafés</h2>
      <Coffes />
    </Wrapper>
  )
}