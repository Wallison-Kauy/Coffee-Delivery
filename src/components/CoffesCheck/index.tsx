import { Wrapper } from "./styles";
import carrinho from "../../assets/carrinho2.svg";
import menos from "../../assets/menos.svg";
import mais from "../../assets/mais.svg";
import { CoffesContext, CoffesProps } from "../../contexts/CoffesContext";

export function CoffesCheck({
  id,
  titulo,
  resumo,
  price,
  count,
  addCount,
  removeCount,
  img,
  isShopPage = false,
  countTotal,
}: CoffesProps) {
  function HandleCountRemove() {
    if(isShopPage && count ===1){
      return
    }
    removeCount(id);
  }

  function HandleCountAdd() {
    addCount(id);
  }

  return (
    <Wrapper>
      <img src={img} alt="" />
      <div>
        <div className="description">
          <h2>{titulo}</h2>
        </div>
        <div className="infos">
          <div className="count">
            <button onClick={HandleCountRemove}>
              <img src={menos} alt="" />
            </button>
            <p>{count}</p>
            <button onClick={HandleCountAdd}>
              <img src={mais} alt="" />
            </button>
          </div>
    
        </div>
      </div>
      <p>
       {countTotal}
      </p>
     
    </Wrapper>
  );
}
