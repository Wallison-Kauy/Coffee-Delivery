import { Wrapper } from "./styles";
import carrinho from "../../assets/carrinho2.svg";
import menos from "../../assets/menos.svg";
import mais from "../../assets/mais.svg";
import { CoffesContext, CoffesProps } from "../../contexts/CoffesContext";

export function Coffes({
  id,
  tags,
  titulo,
  resumo,
  price,
  count,
  addCount,
  removeCount,
  img,
}: CoffesProps) {
  function HandleCountRemove() {
    console.log("no componente ------> id é:", id);
    removeCount(id);
  }

  function HandleCountAdd() {
    console.log("no componente ------> id é:", id);
    addCount(id);
  }

  return (
    <Wrapper>
      <img src={img} alt="" />
      <div className="tags">
        {tags.map((tag) => (
          <div>
            {" "}
            <p>{tag}</p>{" "}
          </div>
        ))}
      </div>
      <div className="description">
        <h2>{titulo}</h2>
        <p>{resumo}</p>
      </div>
      <div className="infos">
        <p>
          R$ <span>{price}</span>{" "}
        </p>
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
  );
}
