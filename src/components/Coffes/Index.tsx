import { Wrapper } from "./styles";
import coffe from '../../assets/coffes/coffe.png'
import carrinho from '../../assets/carrinho2.svg'
import menos from '../../assets/menos.svg'
import mais from '../../assets/mais.svg'
import { CoffesProps } from "../../contexts/CoffesContext";


export function Coffes ({id,tags,titulo,resumo,price,count,addCount,removeCount}:CoffesProps){

  function HandleCountRemove(){
    removeCount(id);
  }

  function HandleCountAdd(){
    addCount(id);
  }

  return (
    <Wrapper>
      <img src={coffe} alt="" />
      <div className="tags">
        <div> <p>TRADICIONAL</p> </div>
        <div> <p>COM LEITE</p> </div>
        <div> <p>GELADO</p> </div>
      </div>
      <div className="description">
        <h2>{titulo}</h2>
        <p>{resumo}</p>
      </div>
      <div className="infos">
        <p>R$ <span>{price}</span> </p>
        <div className="count">
          <button onClick={HandleCountRemove}>
            <img src={menos} alt="" />
          </button>
          <p>{count}</p>
          <button onClick={HandleCountAdd}>
            <img src={mais} alt="" />
          </button>
        </div>
        <a className="carrinho" href="">
         <img src={carrinho} alt="" />
        </a>
      </div>
    </Wrapper>
  )
}