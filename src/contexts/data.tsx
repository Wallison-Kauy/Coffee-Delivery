import { CoffesType } from "./CoffesContext";

import logo from "../assets/coffes/coffe.png";
console.log(logo);

export const CoffesData: CoffesType[] = [
  {
    id: "1",
    tags: ["tradicional"],
    titulo: "Expresso Tradicional",
    resumo: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    count: 0,
    img: logo,
  },
];
