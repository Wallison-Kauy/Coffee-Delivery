import { CoffesType } from "./CoffesContext";

import coffe from "../assets/coffes/coffe.png";
import coffe1 from "../assets/coffes/coffe1.png";
import coffe2 from "../assets/coffes/coffe2.png";
import coffe3 from "../assets/coffes/coffe3.png";
import coffe4 from "../assets/coffes/coffe3.png";

export const CoffesData: CoffesType[] = [
  {
    id: "1",
    tags: ["TRADICIONAL"],
    titulo: "Expresso Tradicional",
    resumo: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    count: 0,
    img: coffe,
  },
  {
    id: "2",
    tags: ["TRADICIONAL"],
    titulo: "Expresso Americano",
    resumo: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    count: 0,
    img: coffe1,
  },
  {
    id: "3",
    tags: ["TRADICIONAL"],
    titulo: "Expresso Cremoso",
    resumo: "Café expresso tradicional com espuma cremosal",
    price: 9.9,
    count: 0,
    img: coffe2,
  },
  {
    id: "4",
    tags: ["TRADICIONAL", "GELADO"],
    titulo: "Expresso Gelado",
    resumo: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    count: 0,
    img: coffe3,
  },
  {
    id: "5",
    tags: ["TRADICIONAL", "COM LEITE"],
    titulo: "Café com Leite",
    resumo: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    count: 0,
    img: coffe4,
  },
];
